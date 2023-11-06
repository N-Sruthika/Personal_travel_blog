document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const posts = document.getElementById('posts');

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = postTitle.value;
        const content = postContent.value;

        if (title && content) {
            // Create a new post element and add it to the posts section
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
            posts.appendChild(postElement);

            // Clear the form
            postTitle.value = '';
            postContent.value = '';
        }
    });
});
