import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { updateBlock } from '../../actions/blockActions'

const ShareButton = (props) => {
    const [checked, setChecked] = useState(false);

    return(
        <>
         <ToggleButton
            key={props.BlockId}
            type="checkbox"
            className="w-20 m-2"
            size="sm"
            variant="outline-info"
            checked={checked}
            value="1"
            onChange={(e) => updateShare(e)}
        > 
        Share? 
        </ToggleButton>
        </>
    )
}

export default ShareButton;