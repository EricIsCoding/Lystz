export const blockReducer = (state = {
}, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return {
              ...state,
              ...action.data.blocks
          }
        case "ADD_ITEM_SUCCESS":
            let addItemState = {...state}
            addItemState[`${action.item.blockId}`].itemIds.push(action.item.id)
            return addItemState
        case "ADD_BLOCK_SUCCESS":
            return {...state, [action.block.id]: {...action.block}}
        case "REMOVE_BLOCK":
            let newState = {...state}
            delete newState[action.deleteData.id]
            return newState
        case "REMOVE_ITEM":
            let removeItemState = {...state}
            removeItemState[action.deleteData.blockId].itemIds.filter(id => id !== action.deleteData.id)
            return removeItemState
        case "REMOVE_VENDOR":
            let removeVendorState = {...state}
            action.deleteData.blockIds.forEach(id => delete removeVendorState[id])
            return removeVendorState
        case "BLOCK_UPDATE_SUCCESS":
            let updateState = {...state}
            updateState[action.block.id] = {...updateState[action.block.id], ...action.block.data}
            return updateState
        default:
            return state
    }
}