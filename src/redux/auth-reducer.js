import { stopSubmit } from 'redux-form'
import { authAPI, usersAPI } from '../api/api'

const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login, isAuth }
    }
}

export const setUser = () => {
    return (dispatch) => {
        return usersAPI.setUser().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const logIn = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logIn(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUser())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Login error'
                dispatch(stopSubmit('login', {_error : message}))
            }
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        authAPI.logOut().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;