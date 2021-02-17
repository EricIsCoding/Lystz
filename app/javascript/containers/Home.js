import React, { Component } from "react";
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { fetchVendors } from '../actions/vendorActions';
import VendorCard from '../components/Vendors/VendorCard';
import VendorInput  from '../components/Vendors/VendorInput';
import GroupCard from "../components/Groups/GroupCard";
import GroupInput from "../components/Groups/GroupInput";

class Home extends Component {

    componentDidMount() {
        if(this.props.vendorsArray?.length == 0) {
            this.props.fetchVendors()
        }
    }

    renderVendors() {
    return this.props.vendorsArray.map(vendor => <VendorCard 
        key={vendor.id} 
        id={vendor.id} 
        name={vendor.name} 
        website={vendor.website} 
        blockIds={vendor.blockIds}/>
        )
    }

    renderGroup() {
        if(this.props.user.group?.invite){ 
           return <GroupCard invite={this.props.user.group.invite} />
        } else if(this.props.user.group?.sharedBlockCount){
            return <GroupCard group={this.props.user.group} />
        } else {
            return <GroupInput />
        }
    }


    render() {
        if(this.props.vendorsArray && this.props.vendorsArray.count !== 0) {
           return <>
                {this.renderVendors()}
                <VendorInput />
                {this.renderGroup()}
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

const mapStateToProps = (state) => {   
    if(state.vendors) {
        let homeVendors = {...state.vendors}
        let vendorsArray = Object.values(homeVendors)
        return {     
            vendorsArray,
            user: {...state.user}
        }
    }
}

const mapDispatchToProps = {
    fetchVendors
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);