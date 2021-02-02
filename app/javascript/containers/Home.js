import React, { Component } from "react";
import { connect } from 'react-redux';
import VendorCard from '../components/VendorCard'
import { fetchVendors } from '../actions/vendorActions'
import VendorInput  from '../components/VendorInput'

class Home extends Component {

    componentDidMount() {
        this.props.fetchVendors()
    }
    
    handleClick(event) {    
        this.props.history.push({
            pathname: `/${event.target.name}/blocks`,
            state: {id: event.target.id}
            })
    }

    renderVendors() {
    return this.props.vendors.map(vendor => <VendorCard 
        handleClick={this.handleClick.bind(this)} 
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
                <img alt="loading-gif" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
           )
        }
    }
}

const mapStateToProps = (state) => {
    debugger;
    if(state.vendors) {
        let vendors = Object.values(state.vendors)
        return { vendors }
    }
}

const mapDispatchToProps = {
    fetchVendors
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);