import produce from 'immer'

export const itemReducer = produce((items, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return action.data.items
        case "ADD_ITEM_SUCCESS":
            items[action.item.id] = action.item
            return items
        case "REMOVE_ITEM":       
            delete items[action.deleteData.id]
            return items
        case "UPDATE_ITEM":
            items[action.item.id] = action.item
            return items
    }
}, {})