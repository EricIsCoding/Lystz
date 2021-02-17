import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'

import {fetchGroup} from '../actions/groupActions'
import { filtered } from '../helpers/helpers'
import Block from '../components/Blocks/Block'

class GroupPage extends Component {

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.id)
    }
    
    renderBlocks() {
        return this.props.blocks.map(block => {      
        return <Block 
        key={block.id} 
        id={block.id} 
        name={block.name} 
        creator={block.creator}
        vendorId={block.vendorId} 
        items={block.items}
        page="group"
        share={block.share}
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
        if(this.props.group?.groupName) {
            return <>
            <h1>Group Page!</h1>
            <h6>Group Name: {this.props.group.groupName}</h6>
            <Container>
                {this.props.group?.groupName ? this.renderRows() : ""}
            </Container>
            </>
        } else {
            return <>
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>          
        </>
        }
    }
}

const mapStateToProps = (state, props) => {
    if(state.group?.groupName){
        let blocks = Object.values(filtered(state.blocks, state.group.blockIds)).map(block => {
            return {...block, items: Object.values(filtered(state.items, block.itemIds))}
         }).sort((a, b) => {a.vendorName < b.vendorName ? 1 : -1})
        return {
            group: state.group,
            blocks
        }
    } else {
        return {id: props.match.params.id}
    }
}

const mapDispatchToProps = {
    fetchGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);