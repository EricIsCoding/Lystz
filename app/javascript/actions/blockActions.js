import { csrf }from '../helpers/helpers';
import BlockNormalizer from '../helpers/normalizer/BlockNormalizer'

export const blockAddSuccess = (block) => {
    return {
        type: "ADD_BLOCK_SUCCESS",
        block
    }
}

export const blockUpdateSuccess = (block) => {
    return {
        type: "BLOCK_UPDATE_SUCCESS",
        block
    }
}

export const addBlock = (block) => {
    return dispatch => {
        let options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify(block)
          }
        return fetch('/api/blocks', options)
        .then(res => res.json())
        .then(json => {
            dispatch(blockAddSuccess(BlockNormalizer(json.data)))
        })
    }
}

export const updateBlock = (block) => {
    return dispatch => {
        let options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify(block.data)
        }
        return fetch(`/api/blocks/${block.id}`, options)
        .then(() => {
            dispatch(blockUpdateSuccess(block))
        })
    }
}