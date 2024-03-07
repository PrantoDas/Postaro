import User from './User.js';
import Comment from './Comment.js';
import Post from './Post.js';

class APIService {
    static baseUrl = 'http://localhost:3001';

    static async sendRequest(path, options = {}) {
        const response = await fetch(`${this.baseUrl}${path}`, options);
        return this.handleResponse(response);
    }

    static async handleResponse(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    static async createComment(comment) {
        const userCommented = await APIService.getUser(comment.userId);
        return new Comment(comment.id, comment.content, comment.commentedOn, comment.userId, comment.postId, userCommented);
    }

    static async getUser(userId) {
        const userData = await this.sendRequest(`/users/${userId}`);
        return new User(userData.id, userData.userName, userData.email, userData.profilePicUrl);
    }

    static async *getPosts(userId = null, postCount = 5) {
        let url = `/posts?userId=${userId}&&count=${postCount}`;
        const postsData = await this.sendRequest(url);
        for (const post of postsData) {
            const userPosted = await APIService.getUser(post.userId);
            yield new Post(post.id, post.content, post.userId, userPosted);
        }
    }

    static async *getCommentsForPost(postId) {
        const commentsData = await this.sendRequest(`/posts/${postId}/comments`);
        for (const comment of commentsData) {
            yield await this.createComment(comment);
        }
    }

    static async addCommentToPost(postId, commentData) {
        const comment = await this.sendRequest(`/posts/${postId}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentData)
        });

        comment.commentedOn = 'Just now';
        return await this.createComment(comment);
    }
}

export default APIService;