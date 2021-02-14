import produce from "immer"


export const userReducer = produce((user, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return action.data.user
        case "REMOVE_USER":      
            delete user[action.deleteData.id]
            return user
        case "UPDATE_USER":
            return state
    }
}, {})