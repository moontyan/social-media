import React from 'react';
import './DialogPreview.css';

function DialogPreview(props) {
    return (
        <div className="dialog-item">
            <div className="dialog-image">
                <img src={props.profileImg} alt="user"></img>
            </div>
            <div className="dialog-info">
                <p className="dialog-username">{props.profileName}</p>
                <p className="dialog-text">1 new message</p>
            </div>
        </div>
    )
}

export default DialogPreview;