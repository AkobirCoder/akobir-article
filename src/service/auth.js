import axios from './api';

const AuthService = {
    async userRegister(user) {
        const response = await axios.post('/users', {user});

        return response.data;
    },
    async userLogin(user) {
        const response = await axios.post('/users/login', {user});

        return response.data;
    },

    async getUser() {
        const response = await axios.get('/user');

        return response.data;
    },
    
    async putUser(user) {
        const response = await axios.put(`/user`, {user});
        return response.data;
    },
}

export default AuthService;