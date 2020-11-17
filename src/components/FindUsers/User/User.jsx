import React from 'react';
import { NavLink } from 'react-router-dom';
import './User.css';

function User(props) {
    return (
        <div className="user">
                <div className='user-header'>
                    <div className="user-img">
                        <NavLink to={'/profile/' + props.id}>
                        <img src={props.profileImg} alt="user"></img>
                        </NavLink>   
                    </div>
                    <div className="follow-btn">
                        {props.followStatus ? 
                        <button disabled={ props.followingInProgress.some(id => id === props.id) } 
                                onClick={ () => { props.unfollowUser(props.id) } }>Unfollow</button> : 
                        <button disabled={props.followingInProgress.some(id => id === props.id) } 
                                onClick={ () => { props.followUser(props.id) } }>Follow</button> }
                    </div>
                </div>
                <div className="user-content">
                    <div className="user-info-container">
                        <p>{props.name}</p>
                        <p>{'props.location.country'}, {'props.location.city'}</p>
                    </div>
                    <div className="user-status">
                        <p>{props.status}</p>
                    </div>
                </div>
            </div>
    )
}

export default User;