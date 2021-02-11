import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Item from '../Items/Item';
import ItemInput from '../Items/ItemInput'
import BlockTitle from './BlockTitle';

const Block = (props) => {

    const renderItems = () => {
        return props.items.map(item => {
            return <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            brand={item.brand} 
            description={item.description} 
            quantity={item.quantity} 
            handleDelete={props.handleDelete}
            vendorId={item.vendorId}
            blockId={item.blockId}/>
        }) 
    }

    const title = () => {
        if(!props.blockPage) {
            return <BlockTitle id={props.id} name={props.name} vendorId={props.vendorId}/>
        } else {
            return <h5>{props.name} : {props.vendorName}</h5>
        }
    }

    const itemInput = () => {
        if (!props.blockPage) {
            return <ItemInput 
            vendorId={props.vendorId} 
            blockId={props.id} 
            updateVendorPage={props.updateVendorPage} 
            blockItems={props.items.length}/>
        }
    }

    return(
     <Col lg={4} className="p-2">
        <Accordion>
        <Card className="p-2">
            {title()}
        </Card>
           {renderItems()}
           {itemInput()}
        </Accordion>
      </Col>
    )
}

export default Block;