import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let posts = props.posts.map(post => (<Post message={post.text} like={post.likesCount}/>))
    let newPost = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPost} value={props.newPostText}/></div>
                <div><button onClick={addPost}>New post</button></div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
}

export default MyPosts;
