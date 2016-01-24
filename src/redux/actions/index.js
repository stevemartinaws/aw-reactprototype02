import {searchProfiles} from './api'
import {getGenders, getGendersSuccess, getGendersError} from './aw-api/getGenders.js';
import {getOrientations, getOrientationsSuccess, getOrientationsError} from './aw-api/GetOrientations.js';
import {genderSelected, serviceSelected, orientationSelected} from './searchBar'

module.exports = {
  searchProfiles,
  getGenders, getGendersSuccess, getGendersError,
  getOrientations, getOrientationsSuccess, getOrientationsError,
  genderSelected, serviceSelected, orientationSelected
};
