import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials : true,
    headers: {"API-KEY": "62903d90-a3ee-4296-bb19-40e17fbc2a7f"}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followUser(id) {
        return axiosInstance.post(`follow/${id}`, {}).then(response => response.data)
    },

    unfollowUser(id){
        return axiosInstance.delete(`follow/${id}`).then(response => response.data)
    },
    setUser() {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    setProfile(userId){
        return axiosInstance.get(`profile/`+ userId).then(response => response.data)
    },
    getStatus(userId){
        return axiosInstance.get(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status){
        return axiosInstance.put(`profile/status`, { status : status})
    }
}


export const authAPI = {
    logIn(email, password, rememberMe = false) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logOut() {
        return axiosInstance.delete(`auth/login`).then(response => response.data)
    }
}
