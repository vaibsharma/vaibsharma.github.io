import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Grid, Header, Menu, Message } from 'semantic-ui-react';
import { initApp } from "../../Actions";

const links = [
    {
        url: "https://github.com/vaibsharma",
        text: "Github"
    },
    {
        url: "https://linkedin.com/in/vaibsharma",
        text: "Linkedin"
    },
    {
        url: "https://www.spoj.com/users/techobist/",
        text: "SPOJ"
    },
    {
        url: "https://www.facebook.com/techobist/",
        text: "Facebook"
    }
];

class Home extends Component {
    constructor(props){
        super(props);
        console.log('start App', this.props);
    }

    static defaultProps = {
        startApp: PropTypes.object,
        actions: PropTypes.object
    };

    componentDidMount() {
        document.title = "Home - Vaibhav Sharma";
        this.props.actions.initApp();
    }

    render() {
        console.log(this.props.startApp.onUpdate.getTime(),this.props.startApp.onStart.getTime());
        return (
            <Container style={styles.container}>
                <div>
                    <Grid textAlign={"center"} columns={2} style={styles.header}>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={8} computer={8} style={styles.grid}>
                                <Header as='h1'>Vaibhav Sharma</Header>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={8} style={styles.grid}>
                                <Menu compact>
                                    {links.map(({url, text}, key) => (
                                        <Menu.Item key={key}>
                                        <a href={url} target={'_blank'}>{text}</a>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p style={styles.p}>
                        Hi! I am Vaibhav Sharma (vaibsharma). I am a final year Engineering Physics student from <b>Delhi
                        Technological University</b> who loves Physics as well as enjoy Programming. I work on system
                        architecture, web and mobile applications. I've been a GSoC student at <b>AOSSIE(Australian Open
                        Source Software
                        Innovations and Educations)</b> in 2017 and mentor in 2018. Will be joining <b>Unacademy</b> as a
                        Software Engineer from June 2019.
                    </p>
                    <Message info>
                        <Message.Header>Am I available for Freelancing?</Message.Header>
                        <p>Yes, I am available. If you have a project and would like me to work on it, drop me a
                            <a style={styles.a} href="mailto:vaib.sharma44@gmail.com"><b> mail</b> .</a>
                        </p>
                    </Message>
                </div>
            </Container>
        );
    }
}

const styles = {
    container : {
        marginLeft: '2em',
        marginRight: '2em',
        marginTop: '2em'
    },
    header:{
      marginBottom: '1.5em'
    },
    p: {
        fontSize: '1.3em',
        lineHeight: '1.4em'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    },
    grid:{
        marginTop: '1em'
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
})(Home);
