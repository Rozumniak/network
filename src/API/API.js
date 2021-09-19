import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "5b9674bd-9414-44f4-ad29-6c2f2b550f29"
    }
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
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form/data'}})
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}
export const loginAPI = {
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },

}
export const securityAPI ={
    getCaptchaUrl(){
        return instance.get(`/security/get-captcha-url`);
    },
}

export const authMe = () => {
    return instance.get(`auth/me`)
}