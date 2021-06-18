import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        profilePage: state.profilePage,
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: (text) => {
            let action = addPostActionCreator(text);
            dispatch(action);
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export  default MyPostsContainer;


