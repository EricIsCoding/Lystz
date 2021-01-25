import React from 'react'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const NavContainer = ({ title }) => {
    return(        
        <LinkContainer to={title == "Home" ? '/' : `/${title.toLowerCase()}`} style={{color: "black"}}>
        <Button variant="link">{title}</Button>
        </LinkContainer>)
}

export default NavContainer
