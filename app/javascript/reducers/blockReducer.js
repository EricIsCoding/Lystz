export function blockReducer(state = {
}, action) {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return {
              ...state,
              ...action.data.blocks
          }
        case "ADD_ITEM_SUCCESS":
            const addItemState = {...state}
            addItemState[`${action.item.blockId}`].itemIds.push(action.item.id)
            return addItemState
        case "ADD_BLOCK_SUCCESS":
            return {...state, [action.block.id]: {...action.block}}
        case "REMOVE_BLOCK":
            const newState = {...state}
            delete newState[action.deleteData.id]
            return newState
        case "REMOVE_ITEM":
            const removeItemState = {...state}
            removeItemState[action.deleteData.blockId].itemIds.filter(id => id !== action.deleteData.id)
            return removeItemState
        case "REMOVE_VENDOR":
            const removeVendorState = {...state}
            action.deleteData.blockIds.forEach(id => delete removeVendorState[id])
            return removeVendorState
        case "UPDATE_BLOCK":
            state = action.data
            return state
        default:
            return state
    }
}