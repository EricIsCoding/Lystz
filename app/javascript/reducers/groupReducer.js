import produce from 'immer'

export const groupReducer = produce((group, action)  => {
    switch (action.type) {
        case "GROUP_FETCH_SUCCESS":
          return action.data.group
        case "ADD_GROUP_SUCCESS":
            return action.group
        case "REMOVE_GROUP":       
            return {}
        case "UPDATE_GROUP":
            group = action.group
            return state
    }
}, {})