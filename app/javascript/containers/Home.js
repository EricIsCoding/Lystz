import React, { Component } from "react";
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap'

import VendorCard from '../components/Vendors/VendorCard'
import VendorInput  from '../components/Vendors/VendorInput'
import { fetchVendors } from '../actions/vendorActions'

class Home extends Component {

    componentDidMount() {
        if(this.props.vendors.length == 0) {
            this.props.fetchVendors()
        }
    }

    renderVendors() {
    return this.props.vendors.map(vendor => <VendorCard 
        key={vendor.id} 
        id={vendor.id} 
        name={vendor.name} 
        website={vendor.website} 
        blockIds={vendor.blockIds}/>
        )
    }

    render() {
        if(this.props.vendors && this.props.vendors.count !== 0) {
           return(
            <div>
                {this.renderVendors()}
                <VendorInput />
            </div>
            )
        } else {
            return (
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>          
            )
        }
    }
}

const mapStateToProps = (state) => {   
    if(state.vendors) {
        let vendors = Object.values(state.vendors)
        return { vendors }
    }
}

const mapDispatchToProps = {
    fetchVendors
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);