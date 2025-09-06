// Utility to help add new blog posts
// This is a helper script for developers to add new blog posts

export const addBlogPost = (slug, title, excerpt, author, date, readTime, category, tags, image, featured = false) => {
    // This function helps you create the structure for a new blog post
    // You would need to:
    // 1. Add the markdown content to markdownLoader.js
    // 2. Add the metadata to metadata.json
    
    const newPost = {
        id: Date.now(), // Simple ID generation
        slug,
        title,
        excerpt,
        author,
        date,
        readTime,
        category,
        tags,
        image,
        featured
    };
    
    console.log('New blog post structure:');
    console.log(JSON.stringify(newPost, null, 2));
    
    console.log('\nTo add this blog post:');
    console.log('1. Add the markdown content to src/Utils/markdownLoader.js');
    console.log('2. Add the metadata to src/Data/blog-posts/metadata.json');
    
    return newPost;
};

// Example usage:
// addBlogPost(
//     'my-new-blog-post',
//     'My New Blog Post',
//     'This is an excerpt of my new blog post',
//     'Vaibhav Sharma',
//     '2024-01-20',
//     '5 min read',
//     'Technology',
//     ['React', 'JavaScript', 'Web Development'],
//     'https://via.placeholder.com/800x400/9C27B0/FFFFFF?text=My+New+Post',
//     true
// );
