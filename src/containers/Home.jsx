import React from 'react';
import {connect} from 'react-redux';
import SearchResultsContainer from './SearchResultsContainer.jsx'

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <SearchResultsContainer />
        {this.props.children}
      </div>
    )
  }
}

module.exports = connect()(Home);
