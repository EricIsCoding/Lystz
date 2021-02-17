import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { filtered } from '../helpers/helpers'

import Block from '../components/Blocks/Block'

class BlockPage extends Component {
    
    renderBlocks() {
        return this.props.blocks.map(block => {      
        return <Block 
        key={block.id} 
        id={block.id} 
        name={block.name} 
        creator={block.creator}
        vendorId={block.vendorId} 
        items={block.items}
        page="block"
        vendorName={block.vendorName}/>})
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
        <h1>All Blocks!</h1>
        <Container>
            {this.renderRows()}
        </Container>
        </div>
    }
}

const mapStateToProps = (state) => {
    let blocks = Object.values(state.blocks).map(block => {       
        return {...block, items: Object.values(filtered(state.items, block.itemIds))}
    }).sort((a, b) => {a.vendorName < b.vendorName ? -1 : 1})
    return { blocks }
}

export default connect(mapStateToProps)(BlockPage);