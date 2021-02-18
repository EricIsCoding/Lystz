import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import DeleteButton  from '../DeleteButton'

const Item = (props) => {
     
    const renderBody = (bodyProps) => {
        const bodyStrings = []

        for(const key in bodyProps) {
            if(bodyProps[key] && bodyProps[key] != "null") {
                bodyStrings.push(`${key}: ${bodyProps[key]}`)
            }
        }

        return bodyStrings.join(" | ")
    }

    return(
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.id}>
        {props.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.id}>
        <Card.Body>
            <p>{renderBody({'Description': `${props.description}`, 'Quantity': `${props.quantity}`, 'Brand': `${props.brand}`})}</p>
            <DeleteButton type="item" id={props.id} vendorId={props.vendorId} blockId={props.blockId}/>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    )
}

export default Item