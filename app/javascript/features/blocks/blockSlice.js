import { createSlice } from '@reduxjs/toolkit'
import { csrf }from '../../helpers/helpers';

import BlockNormalizer from '../helpers/normlaizer/BlockNormalizer';

const initialState = { vendors: {} }

const blockSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        blockAddSuccess: state.blocks[`${action.payload.id}`] = action.payload
    },
    extraReducers: {
        apiFetchSuccess: state.blocks = action.payload.blocks,
        addItemSuccess: state.blocks[`${action.payload.blockId}`].push(action.payload.id)
    }
})

export const { vendorAddSuccess } = blockSlice.actions

export default blockSlice.reducer;

export const addBlock = (block) => {
    return (dispatch) => {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify(block),
          }
        return fetch('/api/blocks', options)
        .then(res => res.json())
        .then(json => {
            dispatch(blockAddSuccess(BlockNormalizer(json)))
        })
    }
}