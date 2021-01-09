import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    let posts = props.posts.map(post => (<Post message={post.text} like={post.likesCount}/>))
    let newPost = React.createRef();
    let addPost =()=>{
        let text = newPost.current.value;
        alert(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
               <textarea ref={newPost} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>New post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
}

export default MyPosts;
