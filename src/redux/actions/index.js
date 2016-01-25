import {searchProfiles} from './api'
import {getGenders, getGendersSuccess, getGendersError} from './aw-api/getGenders.js';
import {getOrientations, getOrientationsSuccess, getOrientationsError} from './aw-api/GetOrientations.js';
import {fieldSelected} from './searchBar'
import {setDisplayFilterList, setDisplayFilterGrid} from './searchResults'

module.exports = {
  searchProfiles,
  getGenders, getGendersSuccess, getGendersError,
  getOrientations, getOrientationsSuccess, getOrientationsError,
  fieldSelected,
  setDisplayFilterList, setDisplayFilterGrid
};
