import React from 'react';
import './Profile.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import ProfileInputContainer from './ProfileInput/ProfileInputContainer';
import ProfileFriendsContainer from './ProfileFriends/ProfileFriendsContainer';
import { reduxForm } from 'redux-form'



function Profile(props) {

  const onSubmit = (values) => {
    props.addPost(values.postTextarea)
}
    return (
        <div className="profile">
            <ProfileHeader profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className="profile-content">
              <ProfileFriendsContainer />
              <ProfilePostsContainer />
            </div>
            <PostsReduxForm onSubmit={onSubmit}/>
          </div>
    )
}

let PostsReduxForm = reduxForm({form: 'posts'})(ProfileInputContainer)

export default Profile;