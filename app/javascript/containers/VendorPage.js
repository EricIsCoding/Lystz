import React, { Component } from "react";
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Block from '../components/Blocks/Block'
import { filtered } from '../helpers/helpers'
import BlockInput from '../components/Blocks/BlockInput'

class VendorPage extends Component {
    
    renderBlocks() {
        return this.props.blocks.map(block => {
        return <Block 
        key={block.id} 
        id={block.id} 
        name={block.name} 
        creator={block.creator}
        vendorId={block.vendorId} 
        items={block.items}/>})
    }

    renderRows() {
        const cols = this.renderBlocks()

        const noRows =  Math.ceil(cols.length / 3);
     
        const rows = Array.from(Array(noRows)).map((n, i) =>(
           <Row key={i}>
            {cols.slice(i* 3, (i + 1)* 3)}
           </Row>
         ));
     
         return rows;
    }

    render() {
        return <div>
        <h1>{this.props.vendor.name}</h1>
        <Container>
            {this.renderRows()}
            <BlockInput vendorId={this.props.vendor.id}/>
        </Container>
        </div>
    }
}

const mapStateToProps = (state, props) => {
    
    let vendor = Object.values(filtered(state.vendors, [props.match.params.id]))[0]
    let blocks = Object.values(filtered(state.blocks, vendor.blockIds)).map(block => {
       return {...block, items: Object.values(filtered(state.items, block.itemIds))}
    })
    return {
        vendor,
        blocks
    }
}

export default connect(mapStateToProps)(VendorPage);