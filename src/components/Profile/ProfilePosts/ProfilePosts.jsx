import React from 'react';
import './ProfilePosts.css';
import Post from './Post/Post';

function ProfilePosts(props) {
    let postElements = props.posts.map(post => <Post profileName={post.profileName} text={post.text} />);
    return (
        <div className="profile-posts">
            <div className="posts-header">
                <p>User Posts</p>
            </div>
            <div className="posts">
                {postElements}
            </div>
        </div>)
}


export default ProfilePosts;