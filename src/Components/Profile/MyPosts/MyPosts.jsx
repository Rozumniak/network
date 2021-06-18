import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Textarea} from "../../Common/FormControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength10]} placeholder={"Post"} name={"Post"} component={Textarea}/>
        </div>
        <div>
            <button>New post</button>
        </div>
    </form>
}
const AddPostReduxForm = reduxForm({
    form: "addPost"
})(AddPostForm);

const MyPosts = (props) => {
    let posts = props.profilePage.posts.map(post => (<Post message={post.text}
                                                           like={post.likesCount} dispatch={props.dispatch}
                                                           profile={props.profile}/>))
    if (!props.profile) {
        return null
    }
    const onSubmit = (formData) => {
        debugger
        let postText = formData.Post
        props.addPost(postText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>

            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
}

export default MyPosts;
