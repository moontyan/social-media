import React from 'react';
import './ProfileFriends.css';
import Friend from './Friend/Friend';

function ProfileFriends(props) {
    
    let friendElements = props.friends.map(friend => <Friend profileImg={friend.profileImg} profileName={friend.profileName} />);
    
    return (
        <div className="profile-friends">
            <div className="friends-header">
                <p>Friends</p>
            </div>
            <div className="friends-container">
                {friendElements}
            </div>
        </div>
    )
}

export default ProfileFriends;