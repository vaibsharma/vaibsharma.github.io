import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Divider, Header, Item, Label } from 'semantic-ui-react';
import { Row, Column, Space, BlogList } from "../../Components"
import { initApp } from "../../Actions";

import Cuemath from "../../Images/cuemath.jpg";
import GSoC from "../../Images/gsoc.png";
import Unacademy from "../../Images/unacademy.png";
import profile from "../../Images/profile.jpeg";
import Uber from "../../Images/uber.png";
import Udaan from "../../Images/udaan.jpeg";

const workExperience = [
    {
        title: "Uber",
        image: Uber,
        subtitle: "Software Engineer, April 2024 - Present",
            content: "Building Uber's growth and marketing metrics across Uber's products. " +
                "Uber is a ride-sharing company based in San Francisco. " +
                "It is a platform that offers ride-sharing services."
    },
    {
        title: "Udaan",
        image: Udaan,
        subtitle: "Software Engineer 3, December 2021 - April 2024",
        content: "At Udaan, I led the development of PerceptPixel, a high-performance image processing platform powering real-time transformations, " +
            "scalable storage, and CDN delivery. I built backend services, CI/CD pipelines, WordPress integration, and monitoring infrastructure, " +
            "mentored engineers, and replaced third-party systems—saving $60k annually while ensuring high reliability and performance at scale."
    },
    {
        title: "Unacademy",
        image: Unacademy,
        subtitle: "Software Developer, June 2019 - July 2021",
        content: "Building Unacademy's Live classes for educators and students on Unacademy Plus. " +
            "Unacademy is an educational technology company based in Bangalore. " +
            "It is a platform that offers online education in India."
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

const BlogRSSFeedUrl = 'https://techobistword.wordpress.com/feed/?format=xml';

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

    renderIntroduction(){
        return(

                <Row style={{display: 'flex', alignItems: 'center', marginBottom: '20px', width: '100%', flexDirection: 'row', justifyContent: 'center', marginLeft: 0, marginRight: 0}}>
                    <Column mobile={12} tablet={12} computer={4} style={{marginTop: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Item.Image size='small' src={profile} circular={true}/>
                    </Column>
                    <Column mobile={12} tablet={12} computer={12} style={{marginTop: 0}}>
                        <p style={styles.p}>
                        Hi! I'm Vaibhav. I’m a <b >software engineer</b> passionate about building scalable systems, <b>AI/ML</b>, <b>Computer Vision</b>, and high-performance applications. 
                        I currently work at Uber, where I design and implement complex real-time systems for growth and marketing metrics across Uber's products. 
                        Previously, I’ve contributed to product and engineering at <b >Udaan</b> and <b >Unacademy</b>, mostly involved on the infrastructure and backend systems involving <b>storage</b>, <b>observability</b>, <b>websockets</b>, <b>live streaming</b> and <b>image processing</b>.
                        <Space/>
                        Outside work, I enjoy <b >cricket</b>, the <b>gym</b>, and exploring new technologies.
                        <Space/>
                        Currently, I'm passionate about <b>LLMs</b>, <b>Computer Vision</b> and AI infrastructure.
                        </p>
                    </Column>
                </Row>
        )
    }

    renderWorkExperience(){
        return(
            <div>
                <Header as={"h1"}> Work Experience </Header>
                <Row>
                    {workExperience.map(({title, image, subtitle, content}, key) => (
                        <Column key={key}>
                            <Row>
                                <Column mobile={4} tablet={4} computer={4}>
                                    <Item.Image size='tiny' src={image}/>
                                </Column>
                                <Column mobile={12} tablet={12} computer={12} style={{marginTop: 0}}>
                                    <Header as={"h2"}>{title}</Header>
                                    <span>{subtitle}</span>
                                    <Space/>
                                    <p> {content}</p>
                                </Column>
                            </Row>
                        </Column>
                    ))}
                </Row>
            </div>
        );
    }

    renderTechnologies(){
        return(
            <div>
                <Header as={"h1"}> Technologies </Header>
                <Space/>
                <Row style={{marginLeft: 0}}>
                    {technologies.map((value, key) => (
                        <Label key={key} size={"medium"} style={styles.technologies}>
                            {value}
                        </Label>
                    ))}
                </Row>
            </div>
        )
    }

    render() {
        console.log(this.props.startApp.onUpdate.getTime(),this.props.startApp.onStart.getTime());
        return (
            <div style={styles.container}>
                <Space/>
                {this.renderIntroduction()}
                <Space/>
                {this.renderWorkExperience()}
                <Space/>
                {this.renderTechnologies()}
                <Space style={{ height: "5em" }}/>
                <Divider/>
                <Space/>
                <div>
                    <Header as={"h1"}> Blogs </Header>
                    <BlogList url={BlogRSSFeedUrl}/>
                    <Space/>
                    <Header size={"large"}>
                        For more blogs please visit <a href="https://techobistword.wordpress.com/">wordpress.</a>
                    </Header>
                </div>
                <Header size={"medium"} textAlign={"center"}>
                    Cheers! <span role="img" aria-label="beer">🍺</span>
                </Header>
                <Space/>
                <Space/>
            </div>
        );
    }
}

const styles = {
    // suggest a better color for the text
    p: {
        fontSize: '1.3em',
        lineHeight: '1.4em',
        marginTop: '1em',
        color: '#333'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    },
    container:{
      marginLeft: 0,
      marginRight: 0
    },
    technologies:{
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