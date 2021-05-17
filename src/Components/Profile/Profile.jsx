import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {

    return (
        <div className=''>
            <ProfileInfo profile={props.profile} id={props.id} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;