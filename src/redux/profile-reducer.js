import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';

let initialState = {
    posts: [
        { profileName: 'Username', text: 'What a day to be alive!' },
        { profileName: 'Username', text: 'Hello World!' }
    ],
    friends: [
        { profileName: 'Julius', profileImg: 'https://www.biography.com/.image/t_share/MTY2NjgyMzA1MzM3NzYyODcx/gettyimages-51242589-2048x2048.jpg' },
        { profileName: 'Otto', profileImg: 'https://myhero.com/images/guest/g293101/hero114688/Otto-von-Bismarck-1-4.jpg' }
    ],
    profile: null,
    status: ''
}

function profileReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                profileName: 'Username', text: action.postData
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case DELETE_POST:
            return {
                ...state.posts.filter(id => id.postId !== action.id)
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status : action.status
            }
        default: return state;
    }

}

export const addPost = (postData) => {
    return {
        type: ADD_POST,
        postData
    }
}

export const deletePost = (postId) => {
    return { 
        type: DELETE_POST,
        postId
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setProfileStatus = (status) => {
    return {
        type : SET_PROFILE_STATUS,
        status
    }
}

export const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setProfileStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
    }
}

export default profileReducer;