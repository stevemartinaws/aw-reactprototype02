import './index.scss'
import 'react-select/scss/default.scss'
import React from 'react';
import SearchField from './SearchField.jsx'
import SearchButton from './SearchButton.jsx'
import Select from 'react-select';

const SearchBar = (props) => {

  const {searchFields} = props;
  const {handleSelectChanged} = props;
  const {handleSearchButtonClick} = props;

  return (
    <div className="search-bar">
      {searchFields.map(sf => {
        return (
          <SearchField key={sf.label} name={sf.label} colSize={sf.colSize}>
            <Select name={`search-form-${sf.label}-select`} value={sf.value} options={sf.options} searchable={false} clearable={false} onChange={handleSelectChanged.bind(null, sf)}/>
          </SearchField>
        )
      })}
      <SearchButton colSize={'2'} handleClick={handleSearchButtonClick}/>
    </div>
  )
}

export default SearchBar;
