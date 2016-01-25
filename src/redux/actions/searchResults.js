import {SEARCHRESULTS_DISPLAY_LIST,SEARCHRESULTS_DISPLAY_GRID} from '../constants/index.js'

export const setDisplayFilterList = () => {
  return {
    type: SEARCHRESULTS_DISPLAY_LIST
  }
}

export const setDisplayFilterGrid = () => {
  return {
    type: SEARCHRESULTS_DISPLAY_GRID
  }
}
