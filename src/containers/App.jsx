import React from 'react';
import {connect} from 'react-redux';
import {Navbar} from '../components/Navbar/index.js'
import {SearchBar} from '../components/SearchBar/index.js'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <Navbar>
          <SearchBar />
        </Navbar>
        <h1>This is the App component.</h1>
        {this.props.children}
      </div>
    )
  }
}

module.exports = connect()(App);
