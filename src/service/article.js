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
    }
}

export default ArticleService;