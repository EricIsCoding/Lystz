import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col'

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
     <Col lg={4} className="p-1">
        <Accordion>
            <BlockTitle id={props.id} name={props.name} vendorId={props.vendorId} vendorName={props.vendorName} blockPage={props.blockPage} share={props.share}/>  
            {renderItems()}
            {itemInput()}
        </Accordion>
      </Col>
    )
}

export default Block;