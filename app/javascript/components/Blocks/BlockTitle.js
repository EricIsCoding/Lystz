import React from 'react'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Accordion from 'react-bootstrap/Accordion'

import DeleteButton from '../DeleteButton'
import ShareButton from './ShareButton'

const BlockTitle = (props) => {

    if(!props.blockPage){
        debugger;
        return(
        <>
         <Card>
            <Accordion.Toggle as={Card.Body} eventKey={props.id}>
            <h5>{props.name}</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.id}>
                <Card.Body>
                    <ButtonGroup toggle size="sm">
                        <DeleteButton type="block" id={props.id} vendorId={props.vendorId} /> <ShareButton id={props.id} share={props.share}/>
                    </ButtonGroup>
                </Card.Body>
            </Accordion.Collapse>
         </Card>
        </>
        )
    } else {
        return(
        <Card className="p-2">
            <h5>{props.name} : {props.vendorName}</h5>
        </Card>
        )
    }
}

export default BlockTitle;
