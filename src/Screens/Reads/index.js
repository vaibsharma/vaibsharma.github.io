import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Header, Card, Button, Icon, Divider, Label } from 'semantic-ui-react';
import { Row, Column, Space } from "../../Components";
import { initApp } from "../../Actions";

class Reads extends Component {
    constructor(props) {
        super(props);
        console.log('Reads App', this.props);
    }

    static defaultProps = {
        startApp: PropTypes.object,
        actions: PropTypes.object
    };

    componentDidMount() {
        document.title = "Recent Reads - Vaibhav Sharma";
        this.props.actions.initApp();
    }

    renderRecentReads() {
        const recentReads = [
            {
                id: 1,
                title: "Designing Data-Intensive Applications",
                author: "Martin Kleppmann",
                type: "Book",
                status: "Currently Reading",
                rating: 5,
                description: "A comprehensive guide to building reliable, scalable, and maintainable applications.",
                link: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
                tags: ["System Design", "Distributed Systems", "Database"]
            },
        ];

        return (
            <div>
                <Header as="h1" textAlign="center" style={styles.pageTitle}>
                    Recent Reads
                </Header>
                <Space />
                <Row>
                    {recentReads.map((read) => (
                        <Column key={read.id} mobile={12} tablet={6} computer={6}>
                            <Card style={styles.card} fluid>
                                <Card.Content>
                                    <div style={styles.cardHeader}>
                                        <div style={styles.bookInfo}>
                                            <Card.Header style={styles.cardTitle}>{read.title}</Card.Header>
                                            <Card.Meta style={styles.author}>by {read.author}</Card.Meta>
                                            <div style={styles.statusContainer}>
                                                <Label 
                                                    color={read.status === 'Completed' ? 'green' : read.status === 'Currently Reading' ? 'blue' : 'orange'}
                                                    size="small"
                                                >
                                                    {read.status}
                                                </Label>
                                                <div style={styles.rating}>
                                                    {[...Array(5)].map((_, i) => (
                                                        <Icon 
                                                            key={i} 
                                                            name="star" 
                                                            color={i < read.rating ? 'yellow' : 'grey'}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Description style={styles.description}>
                                        {read.description}
                                    </Card.Description>
                                    <div style={styles.tagsContainer}>
                                        {read.tags.map((tag, index) => (
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
                                        as="a" 
                                        href={read.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        fluid
                                    >
                                        <Icon name="external" />
                                        View on {read.type === 'Book' ? 'O\'Reilly' : 'Website'}
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Column>
                    ))}
                </Row>
            </div>
        );
    }

    renderReadingList() {
        const readingList = [
            "Deep Learning Ian Goodfellow",
            "Mathematics for Machine Learning by Marc Peter Deisenroth",
            "The Feynman Lectures on Physics",
        ];

        return (
            <div>
                <Divider />
                <Space />
                <Header as="h2" textAlign="center">
                    Reading List
                </Header>
                <Space />
                <div style={styles.readingListContainer}>
                    <p style={styles.readingListText}>
                        Books and resources I plan to read next:
                    </p>
                    <ul style={styles.readingList}>
                        {readingList.map((item, index) => (
                            <li key={index} style={styles.readingListItem}>
                                <Icon name="book" color="blue" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <Space />
                {this.renderRecentReads()}
                {this.renderReadingList()}
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
    card: {
        height: '100%',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        marginBottom: '1em'
    },
    cardHeader: {
        display: 'flex',
        marginBottom: '1em'
    },
    bookCover: {
        marginRight: '1em',
        flexShrink: 0
    },
    coverImage: {
        width: '80px',
        height: '120px',
        objectFit: 'cover',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    bookInfo: {
        flex: 1
    },
    cardTitle: {
        fontSize: '1.3em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.3em'
    },
    author: {
        color: '#666',
        fontSize: '1em',
        marginBottom: '0.5em'
    },
    statusContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5em'
    },
    rating: {
        display: 'flex',
        gap: '2px'
    },
    description: {
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '1em'
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5em',
        marginBottom: '1em'
    },
    tag: {
        margin: '0 !important'
    },
    readingListContainer: {
        textAlign: 'center',
        padding: '2em',
        background: '#f8f9fa',
        borderRadius: '8px',
        margin: '2em 0'
    },
    readingListText: {
        fontSize: '1.1em',
        color: '#666',
        marginBottom: '1em'
    },
    readingList: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'left',
        maxWidth: '600px',
        margin: '0 auto'
    },
    readingListItem: {
        padding: '0.5em 0',
        fontSize: '1em',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5em'
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
})(Reads);
