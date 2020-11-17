import { connect } from 'react-redux';
import ProfileInput from './ProfileInput';


let mapStateToProps = (state) => {
    return {
        newPostText : state.profilePage.newPostText
    }
}

const ProfileInputContainer = connect( mapStateToProps)(ProfileInput);

export default ProfileInputContainer;