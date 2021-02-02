import React from 'react';
import Images from './Samples';
import './Sample.css';

const Sample = ({ imageUrl, onSampling }) => {
    return(
        <div className="wrapper">
        <div><p className="para">{'Use Sample Images'}</p></div>
        <div className="samples">
        {Images.map((img,index) => (
            <div><img src={img} 
            alt='sample images' 
            className="sampimg"
            onClick={onSampling}
            style={{
             border: imageUrl === img ? "6px solid rgb(243, 126, 220)" : ""        
        }}/></div>
        ))}
        </div></div>
    )
}

export default Sample;