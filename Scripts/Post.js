import Renderable from './Renderable.js';

class Post extends Renderable {
    constructor(id, content, userId, userPosted) {
        super();
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.userPosted = userPosted;
    }

    render() {
        return `
            <div class="post-card">
                <div class="post-header">
                    <img src="${this.userPosted.profilePicUrl}" alt="${this.userPosted.userName}" class="post-avatar">
                    <div class="post-user-info">
                        <div class="post-user-name">${this.userPosted.userName}</div>
                        <div class="post-timestamp">Just now</div>
                    </div>
                </div>
                <div class="post-content">${this.content}</div>
                <div class="post-footer">
                    <div class="post-actions">
                        <button class="btn reaction-btn">Like</button>
                        <button class="btn comment-btn" data-post-id="${this.id}">Comment</button>
                        <button class="btn share-btn">Share</button>
                    </div>
                </div>
                <div class="comments-container" id="post-${this.id}-comments">
                    <!-- Comments will be loaded here -->
                </div>
                <div class="add-comment-container">
                    <input type="text" class="add-comment-input" placeholder="Write a comment..." data-post-id="${this.id}">
                    <button class="btn add-comment-submit" data-post-id="${this.id}">Post</button>
                </div>
            </div>
        `;
    }
}

export default Post;