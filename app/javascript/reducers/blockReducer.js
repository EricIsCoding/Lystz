import produce from 'immer'


export const blockReducer = produce((blocks, action) => {
    switch (action.type) {
        case "API_FETCH_SUCCESS":
          return action.data.blocks
        case "GROUP_FETCH_SUCCESS":
            for(const id in action.payload.blocks){
                blocks[id] = action.payload.blocks[id]
            }
            return blocks
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
            blocks[action.block.id] = {...blocks[action.block.id], ...action.block}
            return blocks
    }
}, {})