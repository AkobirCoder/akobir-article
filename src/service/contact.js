import axios from './api';

const ContactService = {
    async sendMessage(data) {
        const response = await axios.post('http://localhost:8000/send-message', data);

        return response.data;
    }
}

export default ContactService;