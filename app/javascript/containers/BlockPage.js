import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Block from '../components/Block'
import { connect } from 'react-redux'
import { filtered, childIds } from '../helpers/helpers'

class BlockPage extends Component {
    
    renderBlocks() {
        return this.props.blocks.map(block => {
        debugger;
        return <Block 
        key={block.id} 
        id={block.id} 
        name={block.name} 
        creator={block.creator}
        vendorId={block.vendorId} 
        items={block.items}
        blockPage={true}
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

const mapStateToProps = (state, ownProps) => {
    const blocks = Object.values(state.blocks).map(block => {       
        block['vendorName'] = state.vendors[block.vendorId].name
        return {...block, items: Object.values(filtered(state.items, block.itemIds))}
    })
    return { blocks }
}

export default connect(mapStateToProps)(BlockPage);