import produce from "immer"


export const userReducer = produce((user, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return action.data.user
        case "ADD_GROUP_SUCCESS":
            user.group = {...action.payload.attributes.group}      
            return user
        case "ACCEPT_GROUP_INVITE":
            user.group = {...action.payload.attributes.group}
            return user
        case "DECLINE_GROUP_INVITE":
            user.group = {}
            return user
        case "INCREASE_SHARED_COUNT":
            user.group.sharedBlockCount += 1
            return user
        case "DECREASE_SHARED_COUNT":
            user.group.sharedBlockCount -= 1
            return user
        case "REMOVE_USER":      
            delete user[action.deleteData.id]
            return user
        case "UPDATE_USER":
            user[action.user.id] = action.user
            return user
    }
}, {})