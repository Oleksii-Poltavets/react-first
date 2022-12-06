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
        return instance.get(`profile/${profileId}`);
    },
    follow (id) {
        return instance.post(`follow/${id}`, {});
    },
    unFollow (id) {
        return instance.delete(`follow/${id}`);
    }
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`).then(
            responce => responce.data
        );
    }
}

