import React from 'react'

const SearchField = ({children, name, colSize}) => {
  return (
    <div className={'search-field col-md-' + colSize}>
      <h6 className='text-left'>{name}</h6>
      {children}
    </div>
  )
}

export default SearchField
