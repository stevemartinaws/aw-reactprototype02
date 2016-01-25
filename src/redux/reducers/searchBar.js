import {SEARCHBAR_FIELD_SELECTED} from '../constants/index'

export const searchBar = (state = {}, action) => {
  switch (action.type) {
      case SEARCHBAR_FIELD_SELECTED:
        let ori_searchQuery_obj = {...state.searchQuery}
        ori_searchQuery_obj[action.field.label] = action.item.queryString;
        let selectedValues = {...state.selectedValues}
        selectedValues[action.field.label] = action.item.value;
        return {
          ...state,
          searchQuery: {...ori_searchQuery_obj
          },
          selectedValues: selectedValues
        }
    default:
      return state
  }

}
