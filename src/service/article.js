import axios from './api';

const ArticleService = {
    async getArticles() {
        const response = await axios.get('/articles');

        return response.data;
    },

    async getArticleDetail(slug) {
        const response = await axios.get(`/articles/${slug}`);

        return response.data;
    }
}

export default ArticleService;