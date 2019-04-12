import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { initApp } from "./Actions";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('start App', this.props);
  }

  static defaultProps = {
    startApp: PropTypes.object,
    actions: PropTypes.object
  };

  componentDidMount() {
    this.props.actions.initApp();
  }

  render() {
    console.log(this.props.startApp.onUpdate.getTime(),this.props.startApp.onStart.getTime());
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    startApp: state.startApp
});

export default connect(mapStateToProps, (dispatch) => {
  return {actions: bindActionCreators({
    initApp
  }, dispatch)}
})(App);
