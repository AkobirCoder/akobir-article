import axios from './api';

const ArticleService = {
    async getArticles() {
        const response = await axios.get('/articles');

        return response.data;
    },
    async getArticleDetail(slug) {
        const response = await axios.get(`/articles/${slug}`);

        return response.data;
    },
    async postArticle(article) {
        const response = await axios.post('/articles', {article});

        return response.data;
    },
    async deleteArticle(slug) {
        const response = await axios.delete(`/articles/${slug}`);

        return response.data;
    },
    async editArticle(slug, article) {
        const response = await axios.put(`/articles/${slug}`, {article});

        return response.data;
    } 
}

export default ArticleService;