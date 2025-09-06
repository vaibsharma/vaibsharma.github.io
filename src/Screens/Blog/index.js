import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Header, Card, Button, Icon, Label, Message, Image } from 'semantic-ui-react';
import { Row, Column, Space } from "../../Components";
import { initApp } from "../../Actions";
import { getAllBlogPosts, getFeaturedBlogPosts } from "../../Data/blogPosts";

class Blog extends Component {
    constructor(props) {
        super(props);
        console.log('Blog App', this.props);
    }

    static defaultProps = {
        startApp: PropTypes.object,
        actions: PropTypes.object
    };

    componentDidMount() {
        document.title = "Blog - Vaibhav Sharma";
        this.props.actions.initApp();
    }

    renderBlogPostCard(post) {
        return (
            <Column key={post.id} mobile={12} tablet={6} computer={4}>
                <Card style={styles.card} fluid>
                <Image src={post.image} style={styles.cardImage} fluid />
                    <Card.Content>
                        <Card.Header style={styles.cardTitle}>{post.title}</Card.Header>
                        <Card.Meta>
                            <span style={styles.meta}>{post.date}</span>
                            <span style={styles.meta}> • </span>
                            <span style={styles.meta}>{post.readTime}</span>
                        </Card.Meta>
                        <Card.Description style={styles.excerpt}>
                            {post.excerpt}
                        </Card.Description>
                        <div style={styles.tagsContainer}>
                            <Label size="mini" style={styles.categoryTag}>
                                {post.category}
                            </Label>
                            {post.tags.slice(0, 2).map((tag, index) => (
                                <Label key={index} size="mini" style={styles.tag}>
                                    {tag}
                                </Label>
                            ))}
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <Button 
                            primary 
                            size="small" 
                            as={Link}
                            to={`/blog/${post.slug}`}
                            fluid
                        >
                            Read More
                            <Icon name="arrow right" />
                        </Button>
                    </Card.Content>
                </Card>
            </Column>
        );
    }

    renderEmptyState() {
        return (
            <div style={styles.emptyState}>
                <Message size="large" style={styles.emptyMessage}>
                    <Message.Header style={styles.emptyTitle}>
                        Blog Coming Soon
                    </Message.Header>
                    <Message.Content style={styles.emptyContent}>
                        <p>I'm currently working on some exciting content that I can't wait to share with you!</p>
                        <p>This space will soon be filled with insights about:</p>
                        <ul style={styles.topicList}>
                            <li>Software Engineering & Architecture</li>
                            <li>AI/ML & Computer Vision</li>
                            <li>Some weekend hacks</li>
                            <li>Interesting POCs</li>
                        </ul>
                        <p style={styles.emptyFooter}>
                            Stay tuned for some weekend hacks and real-world experiences from my journey in tech.
                        </p>
                    </Message.Content>
                </Message>
            </div>
        );
    }

    renderFeaturedPosts() {
        const featuredPosts = getFeaturedBlogPosts();
        
        if (featuredPosts.length === 0) {
            return null;
        }
        
        return (
            <div>
                <Header as="h2" textAlign="center" style={styles.sectionTitle}>
                    Featured Posts
                </Header>
                <Space />
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {featuredPosts.map(post => this.renderBlogPostCard(post))}
                </Row>
            </div>
        );
    }

    renderAllPosts() {
        const allPosts = getAllBlogPosts();
        
        if (allPosts.length === 0) {
            return null;
        }
        
        return (
            <div>
                <Header as="h2" textAlign="center" style={styles.sectionTitle}>
                    All Posts
                </Header>
                <Space />
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {allPosts.map(post => this.renderBlogPostCard(post))}
                </Row>
            </div>
        );
    }

    render() {
        const allPosts = getAllBlogPosts();
        
        return (
            <div style={styles.container}>
                <Space />
                {allPosts.length === 0 ? (
                    this.renderEmptyState()
                ) : (
                    <>
                        <Header as="h1" textAlign="center" style={styles.pageTitle}>
                            My Blog
                        </Header>
                        <Space />
                        {this.renderFeaturedPosts()}
                        <Space style={{ height: "3em" }} />
                        {this.renderAllPosts()}
                        <Space style={{ height: "3em" }} />
                    </>
                )}
            </div>
        );
    }
}

const styles = {
    container: {
        marginLeft: '1em',
        marginRight: '1em',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    pageTitle: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5em'
    },
    sectionTitle: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5em'
    },
    emptyState: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        padding: '2em',
        marginTop: '4em'
    },
    emptyMessage: {
        maxWidth: '600px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        border: 'none',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    },
    emptyTitle: {
        fontSize: '1.8em',
        color: '#2c3e50',
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5em'
    },
    emptyContent: {
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: '#34495e'
    },
    topicList: {
        textAlign: 'left',
        margin: '1em 0',
        paddingLeft: '1.5em'
    },
    emptyFooter: {
        fontStyle: 'italic',
        marginTop: '1.5em',
        color: '#7f8c8d'
    },
    card: {
        height: '100%',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        marginBottom: '1em'
    },
    cardImage: {
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0'
    },
    cardTitle: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5em',
        lineHeight: '1.3'
    },
    meta: {
        color: '#666',
        fontSize: '0.9em'
    },
    excerpt: {
        color: '#555',
        fontSize: '0.95em',
        lineHeight: '1.4',
        marginBottom: '1em'
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.3em',
        marginTop: '0.5em'
    },
    categoryTag: {
        backgroundColor: '#2196F3 !important',
        color: 'white !important',
        margin: '0 !important'
    },
    tag: {
        backgroundColor: '#f0f0f0 !important',
        color: '#666 !important',
        margin: '0 !important'
    }
};

const mapStateToProps = state => ({
    startApp: state.startApp
});

export default connect(mapStateToProps, (dispatch) => {
    return {
        actions: bindActionCreators({
            initApp
        }, dispatch)
    }
})(Blog);
