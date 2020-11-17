import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { setCurrentPage, getUsers, followUser, unfollowUser } from '../../redux/users-reducer';
import { selectUsers, selectPageSize, selectTotalUsersCount, selectCurrentPage, selectIsFetching, selectFollowingInProgress} from '../../redux/user-selectors'
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
    return {
        users : selectUsers(state),
        pageSize : selectPageSize(state),
        totalUsersCount : selectTotalUsersCount(state),
        currentPage : selectCurrentPage(state),
        isFetching : selectIsFetching(state),
        followingInProgress : selectFollowingInProgress(state)
    }
}

export default compose(withAuthRedirect,
    connect(mapStateToProps, { setCurrentPage, getUsers, followUser, unfollowUser }))(FindUsers)