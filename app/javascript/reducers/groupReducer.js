import produce from 'immer'

export const groupReducer = produce((group, action)  => {
    switch (action.type) {
        case "GROUP_FETCH_SUCCESS":
            group = action.payload.group
            return group
        case "REMOVE_GROUP":       
            return {}
        case "UPDATE_GROUP":
            group = action.group
            return group
    }
}, {})