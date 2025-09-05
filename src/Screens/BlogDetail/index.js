import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { Header, Button, Icon, Label, Image, Divider } from 'semantic-ui-react';
import { Row, Column, Space } from "../../Components";
import { initApp } from "../../Actions";
import { getBlogPostBySlug, getAllBlogPosts } from "../../Data/blogPosts";

class BlogDetail extends Component {
    constructor(props) {
        super(props);
        console.log('BlogDetail App', this.props);
    }

    static defaultProps = {
        startApp: PropTypes.object,
        actions: PropTypes.object
    };

    componentDidMount() {
        this.props.actions.initApp();
    }

    render() {
        const { match } = this.props;
        const slug = match.params.slug;
        const post = getBlogPostBySlug(slug);
        
        if (!post) {
            return (
                <div style={styles.container}>
                    <Space />
                    <Header as="h1" textAlign="center">
                        Blog Post Not Found
                    </Header>
                    <Space />
                    <div style={styles.notFoundContainer}>
                        <p>The blog post you're looking for doesn't exist.</p>
                        <Button as={Link} to="/blog" primary>
                            <Icon name="arrow left" />
                            Back to Blog
                        </Button>
                    </div>
                </div>
            );
        }

        const allPosts = getAllBlogPosts();
        const currentIndex = allPosts.findIndex(p => p.id === post.id);
        const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
        const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

        return (
            <div style={styles.container}>
                <Space />
                
                {/* Back to Blog Button */}
                <div style={styles.backButton}>
                    <Button as={Link} to="/blog" basic>
                        <Icon name="arrow left" />
                        Back to Blog
                    </Button>
                </div>

                {/* Blog Post Header */}
                <div style={styles.header}>
                    <Header as="h1" style={styles.title}>
                        {post.title}
                    </Header>
                    <div style={styles.meta}>
                        <span style={styles.author}>By {post.author}</span>
                        <span style={styles.separator}> • </span>
                        <span style={styles.date}>{post.date}</span>
                        <span style={styles.separator}> • </span>
                        <span style={styles.readTime}>{post.readTime}</span>
                    </div>
                    <div style={styles.tagsContainer}>
                        <Label color="blue" size="small">
                            {post.category}
                        </Label>
                        {post.tags.map((tag, index) => (
                            <Label key={index} size="small" style={styles.tag}>
                                {tag}
                            </Label>
                        ))}
                    </div>
                </div>

                {/* Featured Image */}
                <div style={styles.imageContainer}>
                    <Image 
                        src={post.image} 
                        alt={post.title}
                        style={styles.featuredImage}
                        fluid
                    />
                </div>

                {/* Blog Content */}
                <div style={styles.content}>
                    <ReactMarkdown 
                        children={post.content}
                        style={styles.markdownContent}
                    />
                </div>

                {/* Navigation */}
                <Divider />
                <div style={styles.navigation}>
                    <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {prevPost && nextPost ? (
                            // Both posts available - use two columns
                            <>
                                <Column mobile={8} tablet={8} computer={8}>
                                    <div style={styles.navItem}>
                                        <Header as="h4" style={styles.navLabel}>
                                            <Icon name="arrow left" />
                                            Previous Post
                                        </Header>
                                        <Button as={Link} to={`/blog/${prevPost.slug}`} basic fluid>
                                            {prevPost.title}
                                        </Button>
                                    </div>
                                </Column>
                                <Column mobile={8} tablet={8} computer={8}>
                                    <div style={styles.navItem}>
                                        <Header as="h4" style={styles.navLabel}>
                                            Next Post
                                            <Icon name="arrow right" />
                                        </Header>
                                        <Button as={Link} to={`/blog/${nextPost.slug}`} basic fluid>
                                            {nextPost.title}
                                        </Button>
                                    </div>
                                </Column>
                            </>
                        ) : (
                            // Only one post available - center it
                            <Column mobile={8} tablet={8} computer={8} style={styles.centeredColumn}>
                                {prevPost && (
                                    <div style={styles.centeredNavItem}>
                                        <Header as="h4" style={styles.navLabel}>
                                            <Icon name="arrow left" />
                                            Previous Post
                                        </Header>
                                        <Button as={Link} to={`/blog/${prevPost.slug}`} basic fluid>
                                            {prevPost.title}
                                        </Button>
                                    </div>
                                )}
                                {nextPost && (
                                    <div style={styles.centeredNavItem}>
                                        <Header as="h4" style={styles.navLabel}>
                                            Next Post
                                            <Icon name="arrow right" />
                                        </Header>
                                        <Button as={Link} to={`/blog/${nextPost.slug}`} basic fluid>
                                            {nextPost.title}
                                        </Button>
                                    </div>
                                )}
                            </Column>
                        )}
                    </Row>
                </div>

                <Space style={{ height: "3em" }} />
            </div>
        );
    }
}

const styles = {
    container: {
        marginLeft: '1em',
        marginRight: '1em',
        maxWidth: '800px',
        margin: '0 auto'
    },
    backButton: {
        marginBottom: '2em'
    },
    header: {
        textAlign: 'center',
        marginBottom: '2em'
    },
    title: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1em',
        lineHeight: '1.2'
    },
    meta: {
        fontSize: '1.1em',
        color: '#666',
        marginBottom: '1em'
    },
    author: {
        fontWeight: 'bold'
    },
    separator: {
        margin: '0 0.5em'
    },
    date: {
        color: '#888'
    },
    readTime: {
        color: '#888'
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.5em'
    },
    tag: {
        margin: '0 !important'
    },
    imageContainer: {
        marginBottom: '2em',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    featuredImage: {
        width: '100%',
        height: '400px',
        objectFit: 'cover'
    },
    content: {
        fontSize: '1.1em',
        lineHeight: '1.8',
        color: '#333'
    },
    markdownContent: {
        '& h1': {
            fontSize: '2.2em',
            fontWeight: 'bold',
            margin: '1.5em 0 1em 0',
            color: '#333',
            borderBottom: '2px solid #e0e0e0',
            paddingBottom: '0.5em'
        },
        '& h2': {
            fontSize: '1.8em',
            fontWeight: 'bold',
            margin: '1.3em 0 0.8em 0',
            color: '#333'
        },
        '& h3': {
            fontSize: '1.4em',
            fontWeight: 'bold',
            margin: '1.1em 0 0.6em 0',
            color: '#333'
        },
        '& h4': {
            fontSize: '1.2em',
            fontWeight: 'bold',
            margin: '1em 0 0.5em 0',
            color: '#333'
        },
        '& p': {
            marginBottom: '1.2em',
            lineHeight: '1.7'
        },
        '& ul, & ol': {
            marginBottom: '1.2em',
            paddingLeft: '2em'
        },
        '& li': {
            marginBottom: '0.5em',
            lineHeight: '1.6'
        },
        '& blockquote': {
            borderLeft: '4px solid #2196F3',
            paddingLeft: '1em',
            margin: '1.5em 0',
            fontStyle: 'italic',
            color: '#555',
            background: '#f8f9fa',
            padding: '1em',
            borderRadius: '4px'
        },
        '& table': {
            width: '100%',
            borderCollapse: 'collapse',
            margin: '1.5em 0',
            border: '1px solid #ddd'
        },
        '& th, & td': {
            border: '1px solid #ddd',
            padding: '0.8em',
            textAlign: 'left'
        },
        '& th': {
            background: '#f5f5f5',
            fontWeight: 'bold'
        },
        '& pre': {
            background: '#f8f8f8',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            padding: '1em',
            overflow: 'auto',
            margin: '1.5em 0',
            fontFamily: 'Monaco, Consolas, "Courier New", monospace'
        },
        '& code': {
            background: '#f4f4f4',
            padding: '2px 6px',
            borderRadius: '3px',
            fontFamily: 'Monaco, Consolas, "Courier New", monospace',
            fontSize: '0.9em'
        },
        '& pre code': {
            background: 'transparent',
            padding: 0
        },
        '& strong': {
            fontWeight: 'bold'
        },
        '& em': {
            fontStyle: 'italic'
        },
        '& a': {
            color: '#2196F3',
            textDecoration: 'none'
        },
        '& a:hover': {
            textDecoration: 'underline'
        }
    },
    navigation: {
        marginTop: '2em'
    },
    navItem: {
        textAlign: 'center'
    },
    centeredColumn: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    centeredNavItem: {
        textAlign: 'center',
        maxWidth: '400px',
        margin: '0 auto'
    },
    navLabel: {
        color: '#666',
        marginBottom: '0.5em'
    },
    notFoundContainer: {
        textAlign: 'center',
        padding: '2em'
    }
};

const mapStateToProps = state => ({
    startApp: state.startApp
});

export default withRouter(connect(mapStateToProps, (dispatch) => {
    return {
        actions: bindActionCreators({
            initApp
        }, dispatch)
    }
})(BlogDetail));
