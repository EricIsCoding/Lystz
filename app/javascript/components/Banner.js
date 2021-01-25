import React from 'react'
import  Jumbotron  from 'react-bootstrap/Jumbotron'
import Header from './Header'
import NavContainer from './NavContainer'


const Banner = ( { pageName } ) => {

    const pages = ['Home', 'Profile', 'Collaborate']

    const renderNav = () => {
        // Creates a copy of the pages array, filters out the current page, and returns the mapped Nav elements.
        return [... pages].filter(page => page !== pageName).map(page => {
            return <NavContainer title={page}/>
        })
    }

    return (
        <Jumbotron style={{ height: "275px", padding: '10px 10px'}}>
            <Header pageName={pageName}/>
            <br />
            {renderNav()}
        </Jumbotron>
    )
}

export default Banner
