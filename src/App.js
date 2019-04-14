import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home  from "./Screens/Home"
import {Column, Row} from "./Components";
import {Container, Header, Menu} from "semantic-ui-react";

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

export default class App extends Component {
  render() {
    return (
      <Router>
          <Container style={styles.container}>
              <Row textAlign={'center'}>
                  <Column>
                      <Header as='h1'>Vaibhav Sharma</Header>
                  </Column>
                  <Column>
                      <Menu compact>
                          {links.map(({url, text}, key) => (
                              <Menu.Item key={key}>
                                  <a href={url} target={'_blank'}>{text}</a>
                              </Menu.Item>
                          ))}
                      </Menu>
                  </Column>
              </Row>
            <Switch>
          <Route path={"/"} component={Home} />
        </Switch>
          </Container>
      </Router>
    );
  }
}

const styles = {
    container : {
        marginLeft: '2em',
        marginRight: '2em',
        marginTop: '2em'
    }
};
