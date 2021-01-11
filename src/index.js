import React from 'react';
import {renderEntireTree} from "./render";
import state, {addPost, sendMessage, } from "./Redux/state";


renderEntireTree(state, addPost, sendMessage );
