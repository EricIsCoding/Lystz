export function vendorReducer(state = {
}, action) {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
            return {
                ...state,
                ...action.data.vendors
            }
        case "ADD_ITEM_SUCCESS":
            const addItemState = {...state}
            addItemState[`${action.item.vendorId}`].itemIds.push(action.item.id)
            return addItemState  
        case "ADD_VENDOR_SUCCESS":
            return {...state, [action.vendor.id]: {...action.vendor}}
        case "ADD_BLOCK_SUCCESS":
            const addBlockState = {...state}
            addBlockState[`${action.block.vendorId}`].blockIds.push(action.block.id)
            return addBlockState
        case "REMOVE_VENDOR":
            const newState = {...state}
            delete newState[action.deleteData.id]
            return newState
        case "REMOVE_ITEM":
            const removeItemState = {...state}
            removeItemState[action.deleteData.vendorId].itemIds.filter(id  => id !== action.deleteData.id)
            return removeItemState
        case "REMOVE_BLOCK":
            const removeBlockState = {...state}
            return removeBlockState
        case "UPDATE_VENDOR":
            state = action.data
            return state
        default:
            return state
    }
}