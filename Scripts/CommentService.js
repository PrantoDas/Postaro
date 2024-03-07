import APIService from './APIService.js';
import RenderingService from './RenderingService.js';

class CommentService {
    static async loadComments(postId) {
        const commentsContainer = $(`#post-${postId}-comments`);
        commentsContainer.empty(); // Clear existing comments

        for await (let comment of APIService.getCommentsForPost(postId)) {
            commentsContainer.append(RenderingService.render(comment));
        }
    }

    static async addNewComment(postId, userId) {
        const commentContent = $(`.add-comment-input[data-post-id="${postId}"]`).val();
        if (commentContent) {
            const newComment = await APIService.addCommentToPost(postId, {
                content: commentContent,
                userId: userId
            });

            await this.loadComments(postId);
            $(`#post-${postId}-comments`).append(RenderingService.render(newComment));
        }
        $(`.add-comment-input[data-post-id="${postId}"]`).val('');
    }
}

export default CommentService;
