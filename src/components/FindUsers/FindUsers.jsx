import React from 'react';
import './FindUsers.css';
import User from './User/User'
import userPhoto from '../../assets/images/user.png'
import Preloader from '../common/Preloader/Preloader'
import Paginator from './Paginator';


class FindUsers extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {
        
        return (
            <div className="find-users-page">
                <div className="find-users-title">
                    <h1>Discover</h1>
                </div>
                <Paginator totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChange={this.onPageChange} portionSize={10}/>
                {this.props.isFetching ? <Preloader /> : null}
                <div className="users-container">
                    {this.props.users.map(u => <User id={u.id} followStatus={u.followed} name={u.name} 
                    profileImg={u.photos.small != null ? u.photos.small : userPhoto} location={u.location} 
                    status={u.status} followingInProgress={this.props.followingInProgress} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} />)}
                </div>
                <div className="more-btn">
                    <button>Show More</button>
                </div>
            </div>

        )
    }
}

export default FindUsers;