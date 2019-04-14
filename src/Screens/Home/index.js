import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Divider, Icon, Header, Message, Item, Label } from 'semantic-ui-react';
import { Row, Column, Space } from "../../Components/";
import { initApp } from "../../Actions";

import Cuemath from "../../Images/cuemath.jpg";
import GSoC from "../../Images/gsoc.png";
import Unacademy from "../../Images/unacademy.png";

const workExperience = [
    {
        title: "Unacademy",
        image: Unacademy,
        subtitle: "OpenHack, Trial Week Intern March 2019",
        content: "Was called for a Unacademy's engineering program called OpenHack in Bengaluru." +
            "11 students were selected from the country's best technological institutes. I worked on " +
            "scalability and performance issues of Unacademy's mobile app. Among the rest 5 students " +
            "who received the full-time Software Engineer job offer after the interviews."
    },
    {
        title: "Cuemath",
        image: Cuemath,
        subtitle: "Software Development Intern, May 2018 - August 2018",
        content: "Worked on the microservices hosted inside the Docker containers, Cueteacher and" +
            " Cueparent Mobile application. Made the Parent-Teacher-Student interaction flow from the scratch." +
            " Added Voice OTP feature, all from mobile to auth service. Lots of other fixes in internal tools " +
            "in the Cuemath backend application."
    },
    {
        title: "Google Summer of Code",
        image: GSoC,
        subtitle: "Australian Open Source Software Innovations and Education.",
        content: "In 2017, my proposal for the Carbon Footprint project was accepted by the AOSSIE " +
            "in the Google Summer of Code. I worked on the Carbon Footprint webextension and made Carbon Footprint " +
            "RESTful APIs from the scratch. Since then I'm involved with AOSSIE as the project mentor for the " +
            "students participating in this prestigious program. I mentor for Carbon Footprint projects " +
            "and CrowdAlert webapp at AOSSIE."
    },

];

const technologies = [
    "C++", "NodeJS", "Django", "Flask", "Docker", "Heroku", "Git", "Markup", "LATex", "ReactJS", "ReactNative", "Redux",
    "Linux", "MacOS", "CI/CD", "Jenkins"
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
            <div>
                    <Space/>
                    <p style={styles.p}>
                        Hi! I am Vaibhav Sharma (vaibsharma). I am a final year Engineering Physics student from <b>Delhi
                        Technological University</b> who loves Physics as well as enjoy Programming. I work on system
                        architecture, web and mobile applications. I've been a GSoC student at <b>AOSSIE(Australian Open
                        Source Software
                        Innovations and Educations)</b> in 2017 and mentor in 2018. I'll be joining <b>Unacademy</b> as a
                        Software Engineer from June 2019. I like to play cricket, go to gym and read books in my leisure
                        time.
                    </p>
                    <Message info>
                        <Message.Header>Am I available for Freelancing?</Message.Header>
                        <p>Yes, I am available. If you have a project and would like me to work on it, drop me a
                            <a style={styles.a} href="mailto:vaib.sharma44@gmail.com"><b> mail</b> .</a>
                        </p>
                    </Message>
                <Space/>
                <div>
                    <Header as={"h1"}> Work Experience </Header>
                    <Row>
                        {workExperience.map(({title, image, subtitle, content}, key) => (
                            <Column key={key}>
                                <Row>
                                    <Column mobile={4} tablet={4} computer={4}>
                                        <Item.Image size='tiny' src={image} />
                                    </Column>
                                    <Column mobile={12} tablet={12} computer={12}>
                                        <Header as={"h2"}>{title}</Header>
                                        <span>{subtitle}</span>
                                        <Space />
                                        <p> {content}</p>
                                    </Column>
                                </Row>
                            </Column>
                        ))}
                    </Row>
                </div>
                <Space/>
                <div>
                    <Header as={"h1"}> Technologies </Header>
                    <Space/>
                    <Row>
                        {technologies.map((value, key) => (
                            <Label key={key} size={"medium"}>
                                {value}
                            </Label>
                        ))}
                    </Row>
                </div>
                <Space style={{ height: "5em" }}/>
                <Divider/>
                <Space/>
                <div>
                    <Header size={"large"} textAlign={"center"}>
                        For my blogs please visit <a href="https://techobistword.wordpress.com/">wordpress.</a>
                    </Header>
                </div>
                <Header size={"medium"} textAlign={"center"}>
                    vaibsharma <a style={styles.a} href={"https://github.com/vaibsharma"}> <Icon name={"github"}/> </a>
                </Header>
                <Space/>
                <Space/>
            </div>
        );
    }
}

const styles = {
    p: {
        fontSize: '1.3em',
        lineHeight: '1.4em',
        marginTop: '1em'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
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