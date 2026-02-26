import axios from './api';

const ArticleService = {
    async getArticles(author) {
        // const query = author ? `?author=${author}` : '';

        // const response = await axios.get(`/articles/${query}`);

        const response = await axios.get('/articles');

        return response.data;
    },

    async getArticlesByAuthor(username) {
        const response = await axios.get('/articles/', {
            params: {author: username}
        });

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

    async getFollowingUsers() {
        const response = await axios.get('/articles?limit=100');

        const map = new Map();

        response.data.articles.forEach((articleItem) => {
            const author = articleItem.author;

            if (author?.following) {
                map.set(author.username, author);
            }
        });

        return Array.from(map.values());
    },

    async postArticleFavorite(slug) {
        const response = await axios.post(`/articles/${slug}/favorite`);

        return response.data;
    },
    async deleteArticleFavorite(slug) {
        const response = await axios.delete(`/articles/${slug}/favorite`);

        return response.data;
    },

    async getArticleComment(slug) {
        const response = await axios.get(`/articles/${slug}/comments`);

        return response.data;
    },
    async postArticleComment(slug, comment) {
        const response = await axios.post(`/articles/${slug}/comments`, {comment});

        return response.data;
    },
    async deleteArticleComment(slug, commentId) {
        const response = await axios.delete(`/articles/${slug}/comments/${commentId}`);

        return response.data;
    },

    async getFeedArticles() {
        const response = await axios.get('/articles/feed');

        return response.data;
    }
}

export default ArticleService;