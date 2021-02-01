import { csrf }from '../helpers/helpers';

function deleteComplete(deleteData) {  
    const upCaseType = deleteData.type.toUpperCase()
    return {
        type: `REMOVE_${upCaseType}`,
        deleteData
    }
}


export function deleteData(deleteData) {
    return dispatch => {
        const options = {
            method: 'DELETE',
            headers: {
              'X-CSRF-TOKEN': csrf
            }
        }
        fetch(`/api/${deleteData.type + 's'}/${deleteData.id}`, options )
        .then((res) => {
            dispatch(deleteComplete(deleteData))
        })
        .catch(error => console.log(error))
    }
}