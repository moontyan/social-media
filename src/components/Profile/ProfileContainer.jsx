import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile, getStatus, updateStatus, addPost } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.loggedUserId
        }
        this.props.setProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile : state.profilePage.profile,
        status : state.profilePage.status,
        loggedUserId : state.auth.id,
        isAuth : state.auth.isAuth
    }
}

export default compose(
    withRouter, withAuthRedirect,
    connect(mapStateToProps, {setProfile, getStatus, updateStatus, addPost}))(ProfileContainer)