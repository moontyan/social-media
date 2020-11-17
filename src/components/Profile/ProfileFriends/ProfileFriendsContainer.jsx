import ProfileFriends from './ProfileFriends';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends : state.profilePage.friends
    }
}

const ProfileFriendsContainer = connect( mapStateToProps)(ProfileFriends);

export default ProfileFriendsContainer;