import CommentService from './CommentService.js';
import APIService from './APIService.js';
import RenderingService from './RenderingService.js';
  

(() => {
    let currentUser = null;
    let latestPostId = null;
    const notyf = new Notyf();

    console.log('Initializing the app...');

    $(document).ready(async () => {
        $(document).on('click', '.comment-btn', async (e) => {
            const postId = $(e.currentTarget).data('post-id');
            await CommentService.loadComments(postId);
        });

        $(document).on('click', '.add-comment-submit', async (e) => {
            const postId = $(e.currentTarget).data('post-id');
            await CommentService.addNewComment(postId, currentUser.id);
        });

        $(document).on('keypress', '.add-comment-input', async (e) => {
            if (e.key === 'Enter') {
                const postId = $(e.currentTarget).data('post-id');
                await CommentService.addNewComment(postId, currentUser.id);
                e.preventDefault(); // Prevent the default action to avoid form submission or newline in the input
            }
        });

        await loadUserData();
        await loadPosts(5);
        setupInfiniteScroll();

        // Set up periodic check for new posts
        setInterval(async () => {
            const latestPost = await APIService.getLatestPost(currentUser.id);
            if (latestPost && latestPost.id !== latestPostId) {
                notyf.success(`New post posted by ${latestPost.userPosted.userName}`);
                prependPost(latestPost);
                latestPostId = latestPost.id;
            }
        }, 10000); // Check every 10 seconds
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
        return () => {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }
    
    function setupInfiniteScroll() {
        $('#newsFeed').scroll(debounce(async () => {
            if ($('#newsFeed').scrollTop() + $('#newsFeed').innerHeight() >= $('#newsFeed')[0].scrollHeight - 1) {
                await loadPosts(1);
            }
        }, 250)); //250ms delay
    }

    // Function to prepend the latest post to the UI
    function prependPost(post) {
        const newsFeedContainer = $('#newsFeed');
        const postElement = RenderingService.render(post);
        newsFeedContainer.prepend(postElement);
    }
})();
