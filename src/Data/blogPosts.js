import metadata from './blog-posts/metadata.json';
import { getMarkdownContent } from '../Utils/markdownLoader';

// Import local images
import UdaanImage from '../Images/udaan.jpeg';
import UberImage from '../Images/uber.png';
import GSoCImage from '../Images/gsoc.png';
import UnacademyImage from '../Images/unacademy.png';
import CuemathImage from '../Images/cuemath.jpg';
import BusigenceImage from '../Images/busigence.png';

// Image mapping for local images
const imageMap = {
    'udaan': UdaanImage,
    'uber': UberImage,
    'gsoc': GSoCImage,
    'unacademy': UnacademyImage,
    'cuemath': CuemathImage,
    'busigence': BusigenceImage
};

// Enhanced blog post object with content from markdown files and local images
const createBlogPost = (metadata) => ({
    ...metadata,
    content: getMarkdownContent(metadata.slug),
    image: imageMap[metadata.image] || metadata.image
});

// Create blog posts array with content from markdown files
export const blogPosts = metadata.map(createBlogPost);

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};

// Helper function to get all blog posts
export const getAllBlogPosts = () => {
    return blogPosts;
};

// Helper function to get featured blog posts
export const getFeaturedBlogPosts = () => {
    return blogPosts.filter(post => post.featured);
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category) => {
    return blogPosts.filter(post => post.category === category);
};