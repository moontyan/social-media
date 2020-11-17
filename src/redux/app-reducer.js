import { setUser } from './auth-reducer'

const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
    initialized : false
}


const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED :
            return {
                ...state,
                initialized : true
            }
        default :
            return state;
    }
}

export const setInitialized = () => {
    return {
        type : SET_INITIALIZED
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let dispatchPromise = dispatch(setUser());
        dispatchPromise.then(() => {
            dispatch(setInitialized())
        })
    }
}

export default appReducer