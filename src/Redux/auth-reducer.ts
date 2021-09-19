import {authMe, loginAPI, securityAPI} from "../API/API";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';


export type InitialStateType = {
    id: string | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    isFetching: boolean,
    authUserProfile: object | null,
    captchaUrl: string | null
}

let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    authUserProfile: null,
    captchaUrl: null


}
const authReducer = (state = initialState, action: any): InitialStateType => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                ...action.payload.isAuth,

            }
        case SET_AUTH_PROFILE:
            return {
                ...state,
                authUserProfile: action.authProfile,

            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
                captchaUrl: action.payload.captchaUrl
            }
        default:
            return state;
    }


}
type SetAuthUserDataActionPayloadType ={
    id: number | null
    login: string | null
    email:string | null
    isAuth:boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
type SetGetCaptchaUrlSuccess = {
    type: typeof SET_USER_DATA,
    payload: any
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl: string | null): SetGetCaptchaUrlSuccess => ({
    type: SET_USER_DATA,
    payload: {captchaUrl}
});


type SetAuthUserProfileActionType={
    type: typeof SET_AUTH_PROFILE,
    authProfile: {}
}
export const setAuthUserProfile = (authProfile: {}): SetAuthUserProfileActionType => ({type: SET_AUTH_PROFILE, authProfile});


export const authMeTh = () => async (dispatch: any) => {
    let response = await authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));

    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {

    let response = await loginAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authMeTh());
    } else  if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }
        else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));

    }


}
export const getCaptchaUrl = () => async (dispatch: any) => {

    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let response = await loginAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }


}


export default authReducer;