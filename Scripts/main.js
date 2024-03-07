import CommentService from './CommentService.js';
import APIService from './APIService.js';
import RenderingService from './RenderingService.js';
  

(function initApp() {
    let currentUser = null;
    console.log('Initializing the app...');

    $(document).ready(async function() {
        $(document).on('click', '.comment-btn', async function() {
            const postId = $(this).data('post-id');
            await CommentService.loadComments(postId);
        });

        $(document).on('click', '.add-comment-submit', async function() {
            const postId = $(this).data('post-id');
            await CommentService.addNewComment(postId, currentUser.id);
        });

        $(document).on('keypress', '.add-comment-input', async function(e) {
            if (e.key === 'Enter') {
                const postId = $(this).data('post-id');
                await CommentService.addNewComment(postId, currentUser.id);
                e.preventDefault(); // Prevent the default action to avoid form submission or newline in the input
            }
        });

        await loadUserData();
        await loadPosts(5);
        setupInfiniteScroll();
    });

    async function loadUserData() {
        currentUser = await APIService.getUser('cf08e907-9c6f-4a14-ba76-3a14f7f8558d'); // using static user id for now
        $('.sidebar').html(RenderingService.render(currentUser)); 
    }

    async function loadPosts(postCount) {
        const newsFeedContainer = $('#newsFeed');
        for await (let post of APIService.getPosts(currentUser.id, postCount)) {
            newsFeedContainer.append(RenderingService.render(post));
        }
    }

    function debounce(func, delay) {
        let debounceTimer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }
    
    function setupInfiniteScroll() {
        $('#newsFeed').scroll(debounce(async function() {
            if ($('#newsFeed').scrollTop() + $('#newsFeed').innerHeight() >= $('#newsFeed')[0].scrollHeight - 1) {
                await loadPosts(1);
            }
        }, 250)); //250ms delay
    }
})();
