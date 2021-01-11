import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, text: "Hello world", likesCount: 12},
            {id: 2, text: "This is my first post", likesCount: 10},
            {id: 3, text: "Yo, i know what is the .map", likesCount: 10},
            {id: 4, text: "Motherfucker", likesCount: 10},
            {id: 5, text: "Component- is the great thing", likesCount: 22},
            {id: 6, text: "I know what is the props", likesCount: 30},
            {id: 7, text: "Component- is the great thing", likesCount: 1},

        ],
        newPostText : 'kek'

    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Ruslan"},
            {id: 2, name: "Ihor"},
            {id: 3, name: "Diana"},
        ],
        messages: [
            {id: 1, message: "Hello world"},
            {id: 2, message: "Yo"},
            {id: 3, message: "Yo"},
            {id: 3, message: "Yawawdaao"},
            {id: 3, message: "Yawdawdwado"},
            {id: 3, message: "Yawdawdwado"},
            {id: 3, message: "Yawdawdwado"},
            {id: 3, message: "Yawdawdwado"},
            {id: 3, message: "Yawdawdwado"},
            {id: 3, message: "Yawdawdwado"},
        ]
    },
    sidebar: [
            {friendName: "Diana"},
            {friendName: "Ihor"},
            {friendName: "Ruslan"}
        ]
}
window.state = state;
export let addPost = ()=>{
      let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    updateNewPostText('');
    renderEntireTree(state, addPost, sendMessage);
}
export let sendMessage = (messageText)=>{
    let newMessage ={
        id: 1,
        message: messageText,
    }
    state.messagesPage.messages.push(newMessage);
    renderEntireTree(state, addPost, sendMessage);
}
export let updateNewPostText = (newText)=>{
       state.profilePage.newPostText= newText;
    renderEntireTree(state, addPost, sendMessage);
}

export default state;

