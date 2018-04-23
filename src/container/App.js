import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchData} from '../actions'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazon Challenge</h1>
        </header>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  return {data: state.data}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData
}, dispatch)

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App);

export default appVisibility;
