import axios from './api';

const ArticleService = {
    async getArticles(author) {
        const query = author ? `?author=${author}` : '';

        const response = await axios.get(`/articles/${query}`);

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
    },
    async getFollowingArticles() {
        const response = await axios.get('/articles?limit=100');

        const map = new Map();

        response.data.articles.forEach((articleItem) => {
            if (articleItem.author.following) {
                return map.set(articleItem.author.username, articleItem.author);
            }
        });

        const uniqueFollowing = Array.from(map.values());

        return uniqueFollowing;
    }
}

export default ArticleService;