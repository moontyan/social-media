import React from 'react';
import './ProfileHeader.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

function ProfileHeader(props) {
    if (!props.profile) {
        return (<Preloader />)
      }
    
    return (
        <div className="profile-header">
            <div className="profile-picture">
                <img src={props.profile.photos.large === null ? userPhoto :  props.profile.photos.large} alt="profile-avatar" />
            </div>
            <div className="profile-info">
                <div className="name-surname">
                    <p>{props.profile.fullName}</p>
                </div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className="more-info">
                    <ul>
                        <li>Looking for a job:</li>
                        <li>About Me:</li>
                        <li>City:</li>
                    </ul>
                    <ul className="user-info">
                        <li className="user-job">{props.profile.lookingForAJobDescription}</li>
                        <li className="user-about-me">{props.profile.aboutMe}</li>
                        <li className="user-city">Kiev</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;