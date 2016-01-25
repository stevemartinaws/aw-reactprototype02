import React from 'react';
import {connect} from 'react-redux';
import {SearchBar} from '../components/SearchBar/index.js'
import {getGenders, getOrientations} from '../redux/actions/index.js';
import {genderSelected, orientationSelected, serviceSelected, searchProfiles, fieldSelected} from '../redux/actions/index.js';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    this.handleSelectChanged = this.handleSelectChanged.bind(this);
  }
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(getGenders());
    dispatch(getOrientations());
  }
  render() {
    const {searchFields} = this.props;
    return (
      <div>
        <SearchBar searchFields={searchFields} handleSearchButtonClick={this.handleSearchButtonClick} handleSelectChanged={this.handleSelectChanged}/>
      </div>

    )
  }
  handleSelectChanged(sfObj, optionId) {
    const {dispatch} = this.props;
    let item;
    sfObj.options.map(o => {
      if(o.value===optionId){
        item = o;
      }
    })
    console.log(sfObj);
    console.log(item);
    dispatch(fieldSelected(sfObj, item));
  }
  handleSearchButtonClick() {
    console.log('handleSearchButtonClick')
    const {dispatch, searchQuery} = this.props;
    dispatch(searchProfiles(searchQuery));

  }
}

const filterState = (state) => {
  return {
    searchQuery: state.searchBar.searchQuery,
    searchFields: [
      {
        label: 'Gender',
        colSize: 2,
        value: state.searchBar.selectedValues['Gender'] || 0,
        options: state.genders
      }, {
        label: 'Services',
        colSize: 3,
        value: state.searchBar.selectedValues['Services'] || 0,
        options: [
          {
            value: 0,
            label: 'All'
          }, {
            value: 1,
            label: 'Escort',
            queryString: 'IsEscort=1'
          }, {
            value: 2,
            label: 'Webcam',
            queryString: 'IsWebcam=1'
          }, {
            value: 3,
            label: 'Phone Chat',
            queryString: 'IsPhoneChat=1'
          }, {
            value: 4,
            label: 'SMS Chat',
            queryString: 'IsSMSChat=1'
          }
        ]
      }, {
        label: 'Orientation',
        colSize: 2,
        value: state.searchBar.selectedValues['Orientation'] || 0,
        options: state.orientations
      }, {
        label: 'Location',
        colSize: 3,
        value: state.searchBar.selectedValues['Location'] || 0,
        options: [
          {
            value: 0,
            label: 'Everywhere'
          }, {
            value: 1,
            label: 'London'
          }, {
            value: 2,
            label: 'Manchester'
          }, {
            value: 3,
            label: 'Liverpool'
          }, {
            value: 4,
            label: 'Coventry'
          }
        ]
      }
    ]
  }
}

export default connect(filterState)(SearchBarContainer);
