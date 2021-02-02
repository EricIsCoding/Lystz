import { csrf }from '../helpers/helpers';
import BlockNormalizer from '../helpers/normalizer/BlockNormalizer'

export const blockAddSuccess = (block) => {
    return {
        type: "ADD_BLOCK_SUCCESS",
        block
    }
}


export function addBlock(block) {
    return dispatch => {
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
            dispatch(blockAddSuccess(BlockNormalizer(json.data)))
        })
    }
}