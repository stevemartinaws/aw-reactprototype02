import React from 'react';

const SearchButton = ({handleClick, colSize}) => {
  return (
    <div className={'search-btn col-md-'+colSize} onClick={handleClick}>
        <h4><i className='fa fa-search'></i> Search</h4>
    </div>
  )
}

export default SearchButton;
