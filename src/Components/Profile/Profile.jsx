import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {


    return (
        <div className=''>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;