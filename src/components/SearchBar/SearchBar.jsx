import './index.scss'
import 'react-select/scss/default.scss'
import React from 'react';
import SearchField from './SearchField.jsx'
import SearchButton from './SearchButton.jsx'
import Select from 'react-select';

const SearchBar = (props) => {

  const {genderField, orientationsField, servicesField, locationField} = props.searchFields;
  const {handleGenderSelected, handleServiceSelected, handleOrientationSelected, handleLocationSelected} = props.handlers;
  const {handleSearchButtonClick} = props;

  return (
    <div className="search-bar">
      <SearchField name={'Gender'} colSize={genderField.colSize}>
        <Select name="search-form-gender-select" value={genderField.value} options={genderField.options} searchable={false} clearable={false} onChange={handleGenderSelected}/>
      </SearchField>
      <SearchField name={'Services'} colSize={servicesField.colSize}>
        <Select name="search-form-services-select" value={servicesField.value} options={servicesField.options} searchable={false} clearable={false} onChange={handleServiceSelected}/>
      </SearchField>
      <SearchField name={'Orientation'} colSize={orientationsField.colSize}>
        <Select name="search-form-orientation-select" value={orientationsField.value} options={orientationsField.options} searchable={false} clearable={false} onChange={handleOrientationSelected}/>
      </SearchField>
      <SearchField name={'Location'} colSize={locationField.colSize}>
        <Select name="search-form-location-select" value={locationField.value} options={locationField.options} searchable={false} clearable={false} onChange={handleLocationSelected}/>
      </SearchField>
      <SearchButton colSize={'2'} handleClick={handleSearchButtonClick}/>
    </div>
  )
}

export default SearchBar;
