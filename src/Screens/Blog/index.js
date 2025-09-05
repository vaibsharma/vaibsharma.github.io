import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Header, Card, Button, Icon, Label } from 'semantic-ui-react';
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
                    <div style={{...styles.imageContainer, backgroundImage: `url(${post.image})`}} />
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

    renderFeaturedPosts() {
        const featuredPosts = getFeaturedBlogPosts();
        
        return (
            <div>
                <Header as="h2" textAlign="center" style={styles.sectionTitle}>
                    Featured Posts
                </Header>
                <Space />
                <Row>
                    {featuredPosts.map(post => this.renderBlogPostCard(post))}
                </Row>
            </div>
        );
    }

    renderAllPosts() {
        const allPosts = getAllBlogPosts();
        
        return (
            <div>
                <Header as="h2" textAlign="center" style={styles.sectionTitle}>
                    All Posts
                </Header>
                <Space />
                <Row>
                    {allPosts.map(post => this.renderBlogPostCard(post))}
                </Row>
            </div>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <Space />
                <Header as="h1" textAlign="center" style={styles.pageTitle}>
                    My Blog
                </Header>
                <Space />
                {this.renderFeaturedPosts()}
                <Space style={{ height: "3em" }} />
                {this.renderAllPosts()}
                <Space style={{ height: "3em" }} />
            </div>
        );
    }
}

const styles = {
    container: {
        marginLeft: '1em',
        marginRight: '1em'
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
    card: {
        height: '100%',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        marginBottom: '1em'
    },
    imageContainer: {
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px 8px 0 0'
    },
    cardTitle: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5em'
    },
    meta: {
        color: '#666',
        fontSize: '0.9em'
    },
    excerpt: {
        color: '#555',
        lineHeight: '1.5',
        marginTop: '0.5em',
        marginBottom: '1em'
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5em',
        marginBottom: '0.5em'
    },
    categoryTag: {
        background: '#e3f2fd',
        color: '#1976d2',
        margin: '0 !important'
    },
    tag: {
        background: '#f5f5f5',
        color: '#666',
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
