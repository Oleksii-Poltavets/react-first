import axios from 'axios';

const instance = axios.create( {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'faab728b-2b53-4934-8434-a77a218b0256'
    },
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data);
    },
    getUserProfile (profileId) {
        console.warn('Obsolete object. Use object profileAPI instead');
        return profileAPI.getUserProfile(profileId);
    },
    follow (id) {
        return instance.post(`follow/${id}`, {});
    },
    unFollow (id) {
        return instance.delete(`follow/${id}`);
    }
}

export const profileAPI = {
    getUserProfile (profileId) {
        return instance.get(`profile/${profileId}`);
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status});
    },
    changeProfilePicture (imageFile) {
        return instance.put('profile/photo', imageFile, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`).then(responce => responce.data);
    },
    login (email, password, rememberMe) {
        return instance.post('/auth/login', {email, password, rememberMe}).then(responce => responce.data);
    },
    logout () {
        return instance.delete('/auth/login');
    }
}

