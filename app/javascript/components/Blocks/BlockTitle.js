import React from 'react'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Accordion from 'react-bootstrap/Accordion'

import DeleteButton from '../DeleteButton'
import ShareButton from './ShareButton'

const BlockTitle = (props) => {

    return (
        <>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={props.id}>
            {props.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.id}>
                <Card.Body>
                    <ButtonGroup toggle size="sm">
                        <DeleteButton type="block" id={props.id} vendorId={props.vendorId} /> <ShareButton blockId={props.id}/>
                    </ButtonGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        </>
    )
}

export default BlockTitle;
