import React from 'react';
import {connect} from 'react-redux';
import {Navbar} from '../components/Navbar/index.js'
import SearchBarContainer from './SearchBarContainer.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <Navbar>
          <SearchBarContainer />
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App);
