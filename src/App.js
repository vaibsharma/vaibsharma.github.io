import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import {Row, Column} from "./Components";
import Home from "./Screens/Home"
import Blog from "./Screens/Blog"
import Reads from "./Screens/Reads"
import BlogDetail from "./Screens/BlogDetail"
import {Container, Header, Menu} from "semantic-ui-react";

const links = [
    {
        url: "https://github.com/vaibsharma",
        text: "Github",
        external: true
    },
    {
        url: "https://linkedin.com/in/vaibsharma",
        text: "Linkedin",
        external: true
    },
    {
        url: "/blog",
        text: "Blogs",
        external: false
    },
    {
        url: "/reads",
        text: "Reads",
        external: false
    }
];

export default class App extends Component {
  render() {
    return (
      <Router>
          <Container style={styles.container}>
              <Row textAlign={'center'}>
                  <Column>
                      <Header as='h1'><Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>Vaibhav Sharma</Link></Header>
                  </Column>
                  <Column>
                      <Menu compact>
                          {links.map(({url, text, external}, key) => (
                              <Menu.Item key={key}>
                                  {external ? (
                                    <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
                                  ) : (
                                    <Link to={url}>{text}</Link>
                                  )}
                              </Menu.Item>
                          ))}
                      </Menu>
                  </Column>
              </Row>
            <Switch>
          <Route exact path={"/blog"} component={Blog} />
          <Route path={"/blog/:slug"} component={BlogDetail} />
          <Route path={"/reads"} component={Reads} />
          <Route exact path={"/"} component={Home} />
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
