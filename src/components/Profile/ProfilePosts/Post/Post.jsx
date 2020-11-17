import React from 'react';
import './Post.css';
import userPhoto from '../../../../assets/images/user.png'

function Post(props) {
    return (
        <div className="post-item">
            <div className="post-image">
                <img src={userPhoto} alt="user"></img>
            </div>
            <div className="post-info">
                <p className="post-username">{props.profileName}</p>
                <p className="post-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Post;