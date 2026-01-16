import axios from './api';

const ArticleService = {
    async getArticles() {
        const response = await axios.get('/articles');

        return response.data;
    }
}

export default ArticleService;