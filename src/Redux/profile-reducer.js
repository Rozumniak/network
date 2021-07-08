import {profileAPI} from "../API/API";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const STATUS_UPDATE = 'STATUS_UPDATE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE';
const DEACTIVATE_EDIT_MODE = 'DEACTIVATE_EDIT_MODE';


let initialState = {
    posts: [
        {id: 1, text: "Hello world", likesCount: 12},
        {id: 2, text: "This is my first post", likesCount: 10},

    ],
    profile: null,
    status: "",
    profileEditMode: false,
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case ACTIVATE_EDIT_MODE:
            return {
                ...state,
                profileEditMode: true
            }
        case DEACTIVATE_EDIT_MODE:
            return {
                ...state,
                profileEditMode: false
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

export const savePhoto = (photo) => (dispatch) => {
    profileAPI.savePhoto(photo)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        });
}

export const saveProfile = (data) => (dispatch, getState) => {
    dispatch(editModeOff());
   const userID = getState().authReducer.id
    profileAPI.saveProfile(data)
        .then(response => {
            if (response.data.resultCode === 0) {
                profileAPI.getProfile(userID).then(response => {
                    dispatch(setUserProfile(response.data));

                });

            }

        });


}
export const activateProfileEditMode = () => (dispatch) => {

    dispatch(editModeOn());
}
export const deactivateProfileEditMode = () => (dispatch) => {
    dispatch(editModeOff());
}


export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const editModeOn = () => ({type: ACTIVATE_EDIT_MODE});
export const editModeOff = () => ({type: DEACTIVATE_EDIT_MODE});


export default profileReducer;