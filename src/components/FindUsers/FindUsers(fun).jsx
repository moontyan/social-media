import Axios from 'axios';
import React from 'react';
import './FindUsers.css';
import User from './User/User'
import userPhoto from '../../assets/images/user.png'


function FindUsers(props) {

    if (props.users.length === 0) {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {  
        props.setUsers(response.data.items)
        console.log(response.data.items)
        })

    }

    let userElement = props.users.map(u => <User id={u.id} followStatus={u.followed} name={u.name} profileImg={u.photos.small != null ? u.photos.small : userPhoto} location={u.location} status={u.status} follow={props.follow} unfollow={props.unfollow} />)

    return (
        <div className="find-users-page">
            <div className="find-users-title">
                <h1>Discover</h1>
            </div>
            <div className="users-container">
                {userElement}
            </div>
            <div className="more-btn">
                <button>Show More</button>
            </div>
        </div>

    )
}

export default FindUsers;