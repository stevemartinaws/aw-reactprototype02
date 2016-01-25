import React from 'react';
import {connect} from 'react-redux';
import List from './List.jsx';
import Grid from './Grid.jsx';


const Filter = ({onSelectList, onSelectGrid}) => {
  return (
    <div className="sort-icons">
      <List onClick={onSelectList}/>
      <Grid onClick={onSelectGrid}/>
    </div>
  )
}

export default connect()(Filter);
