import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Header from './header/Header';
import Linkform from './form/Linkform';
import Sample from './samples/Sample';
import Loader from './loader/Loader';
import Facerecog from './facerecog/Facerecog';
import Images from './samples/Samples';
import Result from './result/Result';
import Nudity from './nsfw/Nudity';
import Howto from './header/Howto';

const app = new Clarifai.App({
  apiKey: '1083b1b302ab4491a31feccd6017b8f1'
  });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      solution: [],
      nudity: '',
  
    };
  }
  calculateFaceLocation = (data) =>{
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const askimage = document.getElementById('inputimage');
    const width = Number(askimage.width);
    const height = Number(askimage.height);
    return{
      leftCol: clarifaiface.left_col * width,
      topRow: clarifaiface.top_row * height,
      rightCol: width - (clarifaiface.right_col * width),
      bottomRow: height - (clarifaiface.bottom_row * height),
    }
  }
  displayFaceBox = (box) => {
    this.setState({box: box});
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onSampling = (img) => {
    this.setState({input: img.target.src});
  }

  onButtonClick = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
    if(Images.indexOf(this.state.input) === -1){
      Images.push(this.state.input);
      }
  }
  onButtonSmash = () => {
    app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input)
      .then(response => this.setState({solution: response.outputs[0].data.regions[0].data.concepts})
      .catch(err => console.log(err)));
      if(!Images[Images.length -1].startsWith("http")){
        Images.pop();
        }
  }
  onButtonPress = () => {
    app.models.predict(Clarifai.NSFW_MODEL, this.state.input)
      .then(response => this.setState({nudity: response.outputs[0].data.concepts}))  
      .catch(err => console.log(err));
  }
render(){
  const {solution, nudity} = this.state;
  return (
    <div className="App">
      <header>
        <div><Header /></div>
        <div></div>
      </header>
      <Howto />
      <div className="sample" id="form">
        <Sample imageUrl={this.state.input} onSampling={this.onSampling}/>
        <div className="or"><p>{'or'}</p></div>
      </div>
      <div className="form">
        <Linkform onInputChange={this.onInputChange} 
                  onButtonClick={() => {this.onButtonClick(); this.onButtonSmash(); this.onButtonPress();}}
                  onHandleImage={this.handleImage} />
      </div>
      <section className="recog">
        <div className="image"><Facerecog box={this.state.box} imageUrl={this.state.imageUrl} /></div>
        {this.state.imageUrl.length=== 0 ?
          <div></div>
          :solution.length === 0 ?
          <div className="loader"><Loader /></div>
          :(
            <div className="result">
            <Result solution={solution} />
            <Nudity nudity={nudity} />
            </div>
          )
        }
      </section>
    </div>
  );
}
}

export default App;
