import {SEARCH_PROFILES_SUCCESS} from '../constants/index';

export const profiles = (state=[], action) => {
  switch (action.type) {
    case SEARCH_PROFILES_SUCCESS:
      return [...action.data.Profiles]
    default:
      return state
  }
}
