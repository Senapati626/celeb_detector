import React from 'react';
import './Facerecog.css';

const FaceRecog = ( {imageUrl, box } ) => {
    return(
        <div className='ma'>
            <div className='absolute mt3'>
                <img alt=''id='inputimage' src={imageUrl} className="imager shadow-5" />
                <div className='boundingbox' style={{top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecog;