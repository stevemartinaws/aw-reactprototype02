import React from 'react';
import {connect} from 'react-redux';
import {DisplayFilter} from '../components/DisplayFilter/index.js'
import {GridCard, ListCard} from '../components/ProfileCard/index.js';
import {setDisplayFilterList, setDisplayFilterGrid} from '../redux/actions/index.js';

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }
  componentWillMount() {

  }
  render() {
    const {dispatch, profiles} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <DisplayFilter onSelectList={() => dispatch(setDisplayFilterList())} onSelectGrid={() => dispatch(setDisplayFilterGrid())}/>
        </div>
        <div className="row">
          {this.renderResults()}
        </div>
      </div>
    )
  }
  renderResults() {
    const {displayFilter, profiles} = this.props;
    switch (displayFilter) {
      case 'Grid':
        return profiles.map(p => <div key={p.UserID} className="col-sm-6 col-md-4 col-lg-3"><GridCard {...p}/></div>);
        break;
      case 'List':
        return profiles.map(p => <div key={p.UserID} className="col-sm-12"><ListCard {...p}/></div>);
        break;
      default:

    }

  }
}

const filterState = (state) => {
  return {
    profiles: state.profiles,
    displayFilter: state.searchResults.displayFilter
  }
}

export default connect(filterState)(SearchResultsContainer);
