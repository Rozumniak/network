import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
//import {Textarea} from "../../Common/FormControls";
import {Form, Input, InputNumber, Button} from 'antd';
import {deletePost} from "../../../Redux/profile-reducer";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const {TextArea} = Input;
const maxLength100 = maxLengthCreator(100);

const AddPostForm = (props) => {
    return <Form {...layout} name="nest-messages" onFinish={props.onSubmit}>
        <Form.Item name="post" size="large" rules={[
            {
                required: true,
                message: 'Please input text!',
            },
        ]}>
            <Input.TextArea/>
        </Form.Item>
        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 6,
            span: 100}}>
            <Button type="primary" htmlType="submit">
                Отправить
            </Button>
        </Form.Item>
    </Form>
}
const AddPostReduxForm = reduxForm({
    form: "addPost"
})(AddPostForm);

const MyPosts = React.memo(props => {
    console.log("RENDER");
    let posts = [...props.profilePage.posts]
        .reverse()
        .map((post, i) => <div key={i}><Post message={post.text}
                            like={post.likesCount} dispatch={props.dispatch}
                            profile={props.profile} deletePost={props.deletePost}/></div>)
    if (!props.profile) {
        return null
    }
    const onSubmit = (formData) => {
        let postText = formData.post
        props.addPost(postText);
        formData.post = null;
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
});

export default MyPosts;
