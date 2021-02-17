import produce from 'immer'

export const itemReducer = produce((items, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return action.data.items
        case "GROUP_FETCH_SUCCESS":
            for(const id in action.payload.items){
                items[id] = action.payload.items[id]
            }
            return items
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