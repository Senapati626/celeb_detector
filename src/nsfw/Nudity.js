import React from 'react';
import './Nudity.css';

const Nude = ({nudity}) => {
    const filteredNudes = nudity.filter(nude => {
        return nude.name.includes("nsfw");
    })
    const onClicky = () => {
        const warning = document.getElementsByClassName('warning')[0];
        if(filteredNudes[0].value < 0.5){
            console.log('clicked');} else{
            warning.style.display="none";
        }
    }

    let nak
    if(filteredNudes[0].value < 0.5){
        nak = <div></div>
    }else{
        nak =   <div className="warning">
                <div className="warning1">
                <h1 className="alert1">{'warning'}</h1>
                <h1 className="alert">{'This image is too hot to handle.'}</h1>
                <p className="alert2">{'NSFW Content:'} {filteredNudes[0].value * 100}{'%'} </p>
                <button className="close grow" id="close" onClick={onClicky}>{'Continue to Results ?'}</button>
                </div></div>
    }
    return(
        <div>{nak}</div>
    )
}

export default Nude;