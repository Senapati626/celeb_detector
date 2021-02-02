import React from 'react';
import './Linkform.css';

const Linkform = ( { onInputChange, onButtonClick, }) => {
    return(
        <div>
            <div className='center1'>
                <div className='form center pa-4 shadow-5 br3'>
                    <input placeholder="Paste the desired image URL" className='f3 pa-2 w-70 center' type='text' onChange={onInputChange} />
                </div>
                <div>
                <button class="btn" onClick={onButtonClick}>
                    Detect
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Linkform