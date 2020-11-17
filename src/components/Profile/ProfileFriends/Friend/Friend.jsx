import React from 'react';
import './Friend.css';

function Friend(props) {
    return (
        <div className="friend-item">
            <img src={props.profileImg} alt="friend"></img>
            <p>{props.profileName}</p>
        </div>
    )
}

export default Friend;