import React from 'react';
import './Preloader.css'
import preloader from '../../../assets/images/preloader.svg'

function Preloader() {
    return(
        <div className="preloader">
            <img src={preloader} alt="preloader-gif"/>
        </div>
    )
}

export default Preloader;