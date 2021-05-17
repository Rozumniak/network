import {authMe, getProfile} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';
const SET_MY_USER_PROFILE = 'SET_MY_USER_PROFILE';


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
                ...action.data,
                isAuth: true,

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
export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});
export const setAuthUserProfile = (authProfile) => ({type: SET_AUTH_PROFILE, authProfile});


export const authMeTh = () => (dispatch) => {
    authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email));

        }

    });
}

export default authReducer;