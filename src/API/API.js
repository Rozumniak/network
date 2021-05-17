import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'f91eee3f-9dff-4917-9b8c-59b790c9fee2'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});
export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => response.data);
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    }
}
export const profileAPI ={
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId){
        return instance.get(`profile/status/`+ userId)
    },
   updateStatus (status){
        return instance.put(`profile/status`, {status: status})
   }
}
export const authMe = () => {
    return instance.get(`auth/me`)
}