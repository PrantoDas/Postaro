import Renderable from './Renderable.js';

class Comment extends Renderable {
    constructor({ id, content, commentedOn, postId, userId, userCommented }) {
        super();
        Object.assign(this, { id, content, commentedOn, postId, userId, userCommented });
    }

    render() {
        const formattedDate = isNaN(Date.parse(this.commentedOn)) 
            ? this.commentedOn 
            : new Date(this.commentedOn).toLocaleString();

        return `
            <div class="comment" id="comment-${this.id}">
                <div class="comment-avatar-container">
                    <img src="${this.userCommented.profilePicUrl}" alt="${this.userCommented.userName}" class="comment-avatar">
                </div>
                <div class="comment-body">
                    <div class="comment-header">
                        <span class="comment-author">${this.userCommented.userName}</span>
                        <span class="comment-date">${formattedDate}</span>
                    </div>
                    <div class="comment-content">${this.content}</div>
                </div>
            </div>
        `;
    }
}

export default Comment;
