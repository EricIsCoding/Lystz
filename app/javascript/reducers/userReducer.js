export function userReducer(state = {
}, action) {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return {
              ...state,
              ...action.data.user
          }
        case "ADD_USER_SUCCESS":
            const addItemState = {...state, [action.item.id]: {...action.item}}
            return addItemState
        case "REMOVE_USER":
            const newState = {...state}          
            delete newState[action.deleteData.id]
            return newState
        case "UPDATE_USER":
            return state
        default:
            return state
    }
}