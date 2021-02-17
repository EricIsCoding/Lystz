import { csrf }from '../helpers/helpers';
import GroupNormalizer from '../helpers/normalizer/GroupNormalizer'


export const groupFetchSuccess = (group) => {
    return {
        type: "GROUP_FETCH_SUCCESS", 
        payload: group
    }
}


export const addGroupSuccess = (user) => {
    return {
        type: "ADD_GROUP_SUCCESS",
        payload: user
    }
}

export const acceptGroupInvite = (user) => {
    return {
        type: "ACCEPT_GROUP_INVITE",
        payload: user
    }
}

export const declineGroupInvite = (user) => {
    return {
        type: "DECLINE_GROUP_INVITE",
        payload: user
    }
}

export function fetchGroup(id) {
    return dispatch => {
        return fetch(`/api/groups/${id}`)
        .then(res => res.json())
        .then(json => {
            
            dispatch(groupFetchSuccess(GroupNormalizer(json.data)))
        })
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
        return fetch('/api/groups', options)
        .then(res => res.json())
        .then(json => {    
            dispatch(addGroupSuccess(json.data))
        })
    }
}

export const acceptInvite = (id) => {
    return dispatch => {
        const options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify({group: {invite: "accepted"}})
          }
        return fetch(`/api/groups/${id}`, options)
        .then(res => res.json())
        .then(json => {     
            dispatch(acceptGroupInvite(json.data))
        })
    }
}

export const declineInvite = (id) => {
    return dispatch => {
        const options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify({invite: "decline"})
          }
        return fetch(`/api/groups/${id}`, options)
        .then(res => res.json())
        .then(json => {          
            dispatch(declineGroupInvite(json))
        })
    }
}