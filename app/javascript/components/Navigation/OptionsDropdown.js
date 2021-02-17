import React from 'react';
import { NavDropdown, Dropdown } from 'react-bootstrap'

import { csrf } from '../../helpers/helpers'
import ConfirmationModal from '../ConfirmationModal'

const OptionsDropdown = () => {

      // use Devise route to log the current user out
    const sign_out = () => {
        const options = {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': csrf
            }
            }
            fetch('/users/sign_out', options)
            .then(() => {
                // Clear persisted data from localstorage and reload
                localStorage.clear();
                location.reload();
            })
    }
    return(
        <NavDropdown title="Options" id="dark-nav-dropdown" drop="left">
            <ConfirmationModal parentClick={sign_out} type="sign out"/>
        </NavDropdown>
    )
}

export default OptionsDropdown;