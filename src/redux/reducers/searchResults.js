import {SEARCHRESULTS_DISPLAY_LIST, SEARCHRESULTS_DISPLAY_GRID} from '../constants/index'

export const searchResults = (state = {}, action) => {
  switch (action.type) {
    case SEARCHRESULTS_DISPLAY_LIST:
      return {
        ...state,
        displayFilter: 'List'
      }
    case SEARCHRESULTS_DISPLAY_GRID:
      return {
        ...state,
        displayFilter: 'Grid'
      }
    default:
      return state
  }
}
