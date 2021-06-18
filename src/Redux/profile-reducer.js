import {getProfile, profileAPI} from "../API/API";
import {unfollow} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const STATUS_UPDATE = 'STATUS_UPDATE';

let initialState = {
    posts: [
        {id: 1, text: "Hello world", likesCount: 12},
        {id: 2, text: "This is my first post", likesCount: 10},
        {id: 3, text: "Yo, i know what is the .map", likesCount: 10},
        {id: 4, text: "Motherfucker", likesCount: 10},
        {id: 5, text: "Component- is the great thing", likesCount: 22},
        {id: 6, text: "I know what is the props", likesCount: 30},
        {id: 7, text: "Component- is the great thing", likesCount: 1},

    ],
    newPostText: 'kek',
    profile: null,
    status: "",
}
const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                    {id: 6, text: action.newText, likesCount: 0}]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case STATUS_UPDATE:
            return {
                ...state,
                statusInProgress: action.isUpdate
            }


        default:
            return state;
    }


}

export const getProfileTh = (userID) => (dispatch) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getUserStatusTh = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
}
export const updateStatusTh = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}
export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


export default profileReducer;