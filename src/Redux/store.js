/*
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
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

            ],
            messageText: 'lol'

        },
        sidebar: [
            {friendName: "Diana"},
            {friendName: "Ihor"},
            {friendName: "Ruslan"}
        ]
    },
    _callSubscriber () {
        console.log("state changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },


    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
            this._callSubscriber(this._state);

        if (action.type === 'ADD-LIKE') {

             this._state.profilePage.posts.likesCount.push()
        }
    }
}




export default store;
*/
