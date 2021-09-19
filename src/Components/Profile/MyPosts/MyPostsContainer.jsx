import React from 'react';
import {addPostActionCreator, deletePost, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";

class myPostsContainer extends React.Component {

    render() {
        return <div>
            <MyPosts profilePage={this.props.profilePage} profile={this.props.profile} deletePost={this.props.deletePost}
                     addPost={this.props.addPostActionCreator}/>
        </div>
    }
}

    let mapStateToProps = (state) => {
        return {
            profilePage: state.profilePage,
            profile: state.profilePage.profile
        }
    }
    /*
    let mapDispatchToProps = (dispatch) =>{
        return {
            addPost: (text) => {
                let action = addPostActionCreator(text);
                dispatch(action);
            },
        }
    }*/

export default compose(
    connect(mapStateToProps,
    {addPostActionCreator,
        deletePost

} ))(myPostsContainer);


