import { csrf }from '../helpers/helpers';
import normalizer from '../helpers/normlaizer/normalizer'
import vendorNormalizer from '../helpers/normlaizer/vendorNormalizer';

export const beginFetchVendors = () => ({
    type: "FETCH_VENDORS"
})

export const apiFetchSuccess = (data) => {
    return{
        type: "API_FETCH_SUCCESS",
        data
    }
}

export const vendorAddSuccess = (vendor) => {
    return{
        type: "ADD_VENDOR_SUCCESS",
        vendor
    }
}

export function fetchVendors() {
    return dispatch => {
        dispatch(beginFetchVendors)
        return fetch('/api/vendors')
        .then(res => res.json())
        .then(json => {
            dispatch(apiFetchSuccess(normalizer(json)))
        })
    }
}

export function addVendor(vendor) {
    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf
            },
            body: JSON.stringify(vendor),
          }
        return fetch('/api/vendors', options)
        .then(res => res.json())
        .then(json => {
            dispatch(vendorAddSuccess(vendorNormalizer(json)))
        })
    }
}