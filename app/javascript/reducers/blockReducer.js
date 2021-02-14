import produce from 'immer'

export const blockReducer = produce((blocks, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return action.data.blocks
        case "ADD_ITEM_SUCCESS":
            blocks[`${action.item.blockId}`].itemIds.push(action.item.id)
            return blocks
        case "ADD_BLOCK_SUCCESS":
            blocks[action.block.id] = action.block
            return blocks
        case "REMOVE_BLOCK":
            delete blocks[action.deleteData.id]
            return blocks
        case "REMOVE_ITEM":
            blocks[action.deleteData.blockId].itemIds.filter(id => id !== action.deleteData.id)
            return blocks
        case "BLOCK_UPDATE_SUCCESS":
            let updateBlock = blocks[action.block.id]
            updateBlock = {...updateBlock, ...action.block}
            return blocks
    }
}, {})