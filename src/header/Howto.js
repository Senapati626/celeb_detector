import React from "react";
import './howto.css';

class Howto extends React.Component {
  iconClick = () => {
    const list = document.getElementsByClassName("navbar")[0];
    var pos = -500;
    var id= setInterval(frame, 0.5);
    function frame(){
      if(pos === 0){
        clearInterval(id);
      } else{
        pos ++;
        list.style.left = pos + 'px';
      }
    }
  };
  icon2Click = () => {
    const list = document.getElementsByClassName("navbar")[0];
    var pos2 = 0;
    var id= setInterval(frame, 0.5);
    function frame(){
      if(pos2 === 500){
        clearInterval(id);
      } else{
        pos2 ++;
        list.style.left = - pos2 + 'px';
      }
    }
  };
    render(){
    return(
        <div className="howto">
            <div className="icon">
                <div className="icon1"><p onClick={this.iconClick}>{'?'}</p></div>
            </div>
            <div className="navbar">
                <div className="icon2"><p onClick={this.icon2Click}>{'x'}</p></div>
                <div><h1>How to use the app</h1></div>
                <div>
                <ul>
                    <li>1. Copy the image address of the image you want to detect.</li>
                    <li>2. Paste it in the prompted <b>input form</b> below.</li>
                    <li>3. You can also use the sample images.</li>
                    <li>4. Once you are ready, press the <b>Detect</b> button and wait for a moment.</li>
                    <li>5. The app would detect the person in the image through Tensorflow analysis. </li>
                </ul></div>
            </div>
        </div>
    )
}}

export default Howto;