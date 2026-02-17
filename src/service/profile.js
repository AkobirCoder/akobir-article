import axios from './api';

const ProfileService = {
    async getProfile(username) {
        const response = await axios.get(`/profiles/${username}`);

        return response.data;
    },

    async followProfile(username) {
        const response = await axios.post(`/profiles/${username}/follow`);

        return response.data;
    },

    async unfollowProfile(username) {
        const response = await axios.delete(`/profiles/${username}/follow`);

        return response.data;
    }
}

export default ProfileService;