import React from 'react'
import {Container, Image, Col, Row} from 'react-bootstrap'

const Header = ({pageName}) => {
    
    const renderTagLine = () => {
        switch(pageName) {
            case "Home":
                return "Connecting Creativity"
            case "Profile":
                return "User's Name"
            case "Collaborate":
                return "WITH OTHER ARTISTS"
            default:
                return "Add a Tagline"
        }
    }

    return (
        <Container style={{height: "200px"}}>
            <Row>
                <Col>
                    <Image src="https://res.cloudinary.com/art-lab-collab/image/upload/c_scale,w_450/v1606967838/LOGO_u7s495.png"  fluid/>
                </Col>                
                <Col>
                <Row>
                        <p class="display-3">{pageName}</p>
                    </Row>
                    <Row>
                        <p class="h4">{renderTagLine()}</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
