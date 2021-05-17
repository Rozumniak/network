import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'


const MyPosts = (props) => {
    let posts = props.profilePage.posts.map(post => (<Post message={post.text}
                                                           like={post.likesCount} dispatch={props.dispatch}
                                                           profile={props.profile}/>))
    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.onPostChange(text);
    }
    if (!props.profile) {
        return null
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPost} value={props.profilePage.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>New post</button>
                </div>


            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
}

export default MyPosts;
