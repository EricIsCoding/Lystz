import React from 'react'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { deleteData } from '../actions/deleteAction'
import ConfirmationModal from './ConfirmationModal'

const DeleteButton = (props) => {

    const data = () => {
        if (props.type === 'item') {
            return {type: props.type,
                id: props.id,
                vendorId: props.vendorId,
                blockId: props.blockId
            }
        } else if (props.type === 'block') {
            return {type: props.type,
                id: props.id,
                vendorId: props.vendorId
            }
        } else {
            return {type: props.type,
                id: props.id, 
                blockIds: props.blockIds
            }
        }
    }

    const handleDelete = ( ) => {
        props.deleteData( data() )        
    }

    return( 
     <ConfirmationModal type="delete" parentClick={handleDelete}/>
    )
}

const mapDispatchToProps ={
    deleteData
}

export default connect(null, mapDispatchToProps)(DeleteButton)