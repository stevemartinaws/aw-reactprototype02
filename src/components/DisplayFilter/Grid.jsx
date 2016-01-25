import React from 'react';

const Grid = ({onClick}) => {
  return (
    <span className="grid-view" onClick={onClick}>
      <i className="fa fa-th fa-2x"></i>
      Grid
    </span>
  )
}

export default Grid;
