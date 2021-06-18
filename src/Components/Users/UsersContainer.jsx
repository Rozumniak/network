import React from 'react';
import {connect} from "react-redux";
import {
    follow, followTh, getUsersTh,
    setCurrentPage,
    unfollow, unfollowTh
} from "../../Redux/users-reducer";

import Users from "./Users";
import Preloader from "../Common/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersSuperSelector,
} from "../../Redux/users-selectors";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersTh(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsersTh(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   unfollow={this.props.unfollowTh}
                   follow={this.props.followTh}
            /></ >
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage, getUsersTh, unfollowTh, followTh
        }))(UsersAPI);



