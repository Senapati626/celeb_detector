import React from 'react';
import Images from './Samples';
import {TiTick} from 'react-icons/ti';
import {IconContext} from 'react-icons';
import './Sample.css';

const Sample = ({ imageUrl, onSampling }) => {
    
    return(
        <div className="wrapper">
        <div><p className="para">{'Use Sample Images'}</p></div>
        <div className="samples">
        {Images.map((img,index) => (
            <div
            style={{
                border: imageUrl === img ? "6px solid #D37AFB" : ""        
           }}>
           <img src={img} 
            alt='sample images' 
            className="sampimg"
            onClick={onSampling}
            style={{
                filter: imageUrl === img ? "" : "grayscale()"
            }}
            />
            <IconContext.Provider value={{color: "white"}}>
            <div className="selectText" 
            style={{
                display: imageUrl === img ? "block" : "none"        
                    }}>
                <p><TiTick/></p>
            </div>
            </IconContext.Provider>
            </div>
        ))}
        </div></div>
    )
}

export default Sample;