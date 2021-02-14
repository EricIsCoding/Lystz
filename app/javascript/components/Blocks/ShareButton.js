import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { updateBlock } from '../../actions/blockActions'

const ShareButton = (props) => {
    const [checked, setChecked] = useState(props.share);
    const dispatch = useDispatch();

    const updateShare = (event) => {
        let block = {
            id: props.id,
            data: {
                share: event.currentTarget.checked
            }
        }
        setChecked(event.currentTarget.checked)
        dispatch(updateBlock(block))
    }

    return(
        <>
         <ToggleButton
            key={props.id}
            type="checkbox"
            className="w-20 m-2"
            size="sm"
            variant="outline-info"
            checked={checked}
            value="1"
            onChange={(e) => updateShare(e)}
        > 
        {checked ? "Shared!" : "Share?"}
        </ToggleButton>
        </>
    )
}

export default ShareButton;