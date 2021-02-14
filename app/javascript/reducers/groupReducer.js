export function groupReducer(state = {
}, action) {
    switch (action.type) {
        case "GROUP_FETCH_SUCCESS":
          return {
              ...state,
              ...action.data.group
          }
        case "ADD_GROUP_SUCCESS":
            const addItemState = {...state, [action.item.id]: {...action.item}}
            return addItemState
        case "REMOVE_GROUP":
            const newState = {...state}          
            delete newState[action.deleteData.id]
            return newState
        case "UPDATE_GROUP":
            return state
        default:
            return state
    }
}