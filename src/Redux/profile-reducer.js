import {profileAPI} from "../API/API";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const STATUS_UPDATE = 'STATUS_UPDATE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE';
const DEACTIVATE_EDIT_MODE = 'DEACTIVATE_EDIT_MODE';
const DELETE_POST = 'DELETE_POST';

type PostsType={
    id: number
    text: string
    likesCount: number | null
}
type ContactsType={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType={
    small: string
    large: string
}
type ProfileType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

let initialState = {
    posts: [
        {id: 1, text: "Hello world", likesCount: 12},
        {id: 2, text: "This is my first post", likesCount: 10},

    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: "",
    profileEditMode: false as boolean,
    statusInProgress: false as boolean
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {


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
                profile: {...state.profile, photos: action.photos} as ProfileType
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
        case DELETE_POST:
            return {
                ...state, posts: {...state.posts.filter(p=> p.id != action.postID)}
            }

        default:
            return state;
    }
}
export const getProfileTh = (userID: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userID)
        dispatch(setUserProfile(response.data));

}
export const getUserStatusTh = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId)

            dispatch(setUserStatus(response.data));

}
export const updateStatusTh = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)

            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }

}

export const savePhoto = (photo: any) => async (dispatch: any) => {
    let response = await  profileAPI.savePhoto(photo)
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
}

export const saveProfile = (data: ProfileType) => async (dispatch: any, getState: any) => {
    dispatch(editModeOff());
   const userID = getState().authReducer.id
    let response = await profileAPI.saveProfile(data)

            if (response.data.resultCode === 0) {
                let response = await profileAPI.getProfile(userID)
                    dispatch(setUserProfile(response.data));
            }
}
export const activateProfileEditMode = () => (dispatch: any) => {

    dispatch(editModeOn());
}
export const deactivateProfileEditMode = () => (dispatch: any) => {
    dispatch(editModeOff());
}

type AddPostActionType = {
    type: typeof  ADD_POST
    newText: string
}
export const addPostActionCreator = (text: string): AddPostActionType => ({type: ADD_POST, newText: text});

type SetUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfile => ({type: SET_USER_PROFILE, profile});

type SetUserStatus = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): SetUserStatus => ({type: SET_USER_STATUS, status});

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

type EditModeOn = {
    type: typeof ACTIVATE_EDIT_MODE
}
export const editModeOn = (): EditModeOn => ({type: ACTIVATE_EDIT_MODE});

type EditModeOff = {
    type: typeof DEACTIVATE_EDIT_MODE
}
export const editModeOff = (): EditModeOff => ({type: DEACTIVATE_EDIT_MODE});

type DeletePostType ={
    type: typeof DELETE_POST
    postID: number
}
export const deletePost = (postID: number): DeletePostType => ({ type:DELETE_POST, postID })


export default profileReducer;