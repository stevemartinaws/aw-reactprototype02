import React from 'react';
import {connect} from 'react-redux';
import {SearchBar} from '../components/SearchBar/index.js'
import {getGenders, getOrientations} from '../redux/actions/index.js';
import {genderSelected, orientationSelected, serviceSelected} from '../redux/actions/index.js';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    this.handleGenderSelected = this.handleGenderSelected.bind(this);
    this.handleOrientationSelected = this.handleOrientationSelected.bind(this);
    this.handleServiceSelected = this.handleServiceSelected.bind(this);
    this.handleLocationSelected = this.handleLocationSelected.bind(this);
  }
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(getGenders());
    dispatch(getOrientations());
  }
  render() {
    const {searchFields} = this.props;
    const handlers = {
      handleGenderSelected: this.handleGenderSelected,
      handleOrientationSelected: this.handleOrientationSelected,
      handleServiceSelected: this.handleServiceSelected,
      handleLocationSelected: this.handleLocationSelected,
    }
    return (
      <div>
        <SearchBar searchFields={searchFields} handleSearchButtonClick={this.handleSearchButtonClick} handlers={handlers}/>
      </div>

    )
  }
  handleGenderSelected(item){
    const{dispatch} = this.props;
    dispatch(genderSelected(item));
    console.log(item)
  }
  handleOrientationSelected(item){
    const{dispatch} = this.props;
    dispatch(orientationSelected(item));
    console.log(item)
  }
  handleServiceSelected(item){
    const{dispatch} = this.props;
    dispatch(serviceSelected(item));
    console.log(item)
  }
  handleLocationSelected(item){
    console.log(item)
  }
  handleSearchButtonClick(){
    console.log('handleSearchButtonClick')
  }
}

const filterState = (state) => {
  return {
    searchFields: {
      genderField: {
        colSize: 2,
        value: 0,
        options: state.genders
      },
      servicesField: {
        colSize: 3,
        value: 0,
        options:[{value:0, label:'All'},{value:1, label:'Escort'},{value:2, label:'Webcam'},{value:3, label:'Phone Chat'},{value:4, label:'SMS Chat'}]
      },
      orientationsField: {
        colSize: 2,
        value: 0,
        options: state.orientations
      },
      locationField: {
        colSize: 3,
        value: 0,
        options:[{value:0, label:'Everywhere'},{value:1, label:'London'},{value:2, label:'Manchester'},{value:3, label:'Liverpool'},{value:4, label:'Coventry'}]
      }
    }
  }
}

export default connect(filterState)(SearchBarContainer);
