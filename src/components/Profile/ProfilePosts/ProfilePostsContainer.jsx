import ProfilePosts from './ProfilePosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts
    }
}


const ProfilePostsContainer = connect(mapStateToProps)(ProfilePosts);

export default ProfilePostsContainer;