import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./Redux/state";




export let renderEntireTree = (state, addPost, sendMessage) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

