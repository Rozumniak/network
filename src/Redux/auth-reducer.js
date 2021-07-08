import {authMe, loginAPI} from "../API/API";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    authUserProfile: null,


}
const authReducer = (state = initialState, action) => {


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
        default:
            return state;
    }


}
export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
});
export const setAuthUserProfile = (authProfile) => ({type: SET_AUTH_PROFILE, authProfile});


export const authMeTh = () => async (dispatch) => {
   let response = await authMe()
               if (response.data.resultCode === 0) {
                   let {id, login, email} = response.data.data;
                   dispatch(setAuthUserData(id, login, email, true));

               }

}
export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await loginAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(authMeTh());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }


}
export const logout = () => async (dispatch) => {
   let response = await loginAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }


}

export default authReducer;