import {SEARCHBAR_FIELD_SELECTED} from '../constants/index.js'

export const fieldSelected = (field, item) => {
  return {
    type: SEARCHBAR_FIELD_SELECTED,
    field: field,
    item: item
  }
}
