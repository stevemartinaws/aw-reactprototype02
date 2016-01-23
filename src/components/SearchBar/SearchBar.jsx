import './index.scss'
import React from 'react';
import SearchField from './SearchField.jsx'
import SearchButton from './SearchButton.jsx'
import Select from 'react-select';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <SearchField name={'Gender'} colSize={'2'}>
        <Select name="search-form-gender-select"searchable={false} clearable={false}/>
      </SearchField>
      <SearchField name={'Services'} colSize={'3'}>
        <Select name="search-form-services-select" searchable={false} clearable={false}/>
      </SearchField>
      <SearchField name={'Orientation'} colSize={'2'}>
        <Select name="search-form-orientation-select" searchable={false} clearable={false}/>
      </SearchField>
      <SearchField name={'Location'} colSize={'3'}>
        <Select name="search-form-location-select" searchable={false} clearable={false}/>
      </SearchField>
      <SearchButton colSize={'2'}/>
    </div>
  )
}

export default SearchBar;
