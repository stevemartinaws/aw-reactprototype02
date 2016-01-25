import React from 'react';

const List = ({onClick}) => {
  return (
    <span className="list-view" onClick={onClick}>
      <i className="fa fa-list fa-2x"></i>
      List
    </span>
  )
}

export default List;
