import { csrf }from '../helpers/helpers';
// import ItemNormalizer from '../helpers/normalizer/ItemNormalizer';

export const addGroupSuccess = (group) => {
    return {
        type: "ADD_GROUP_SUCCESS",
        item
    }
}

export function addGroup(group) {
    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify({group})
          }
        debugger;  
        return fetch('/api/groups', options)
        .then(res => res.json())
        .then(json => {          
            dispatch(addGroupSuccess(ItemNormalizer(json.data)))
        })
    }
}