import produce from 'immer'

export const vendorReducer = produce((vendors, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
            vendors = action.data.vendors
            return vendors
        case "ADD_ITEM_SUCCESS":
            vendors[action.item.vendorId].itemIds.push(action.item.id)
            return vendors  
        case "ADD_VENDOR_SUCCESS":
            vendors[action.vendor.id] = action.vendor
            return vendors
        case "ADD_BLOCK_SUCCESS":
            vendors[action.block.vendorId].blockIds.push(action.block.id)
            return vendors
        case "REMOVE_VENDOR":
            delete vendors[action.deleteData.id]
            return vendors
        case "REMOVE_ITEM":
            vendors[action.deleteData.vendorId].itemIds.filter(id  => id !== action.deleteData.id)
            return vendors
        case "REMOVE_BLOCK":
            vendors[action.deleteData.vendorId].itemIds.filter(id  => id !== action.deleteData.id)
            return vendors
        case "UPDATE_VENDOR":
            state = action.data
            return state
    }
}, {})