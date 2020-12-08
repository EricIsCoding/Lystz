import React from 'react'
import {Jumbotron, Container, Image, Button, Col, Row} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Banner = ( { pageName } ) => {

    return (
        <Jumbotron style={{ height: "275px", padding: '10px 10px'}}>
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
                            <p class= "h4">With Other Artists</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <br />
            <LinkContainer to="/collaborations" style={{color: "black"}}>
            <Button variant="link">Collaborations</Button>
            </LinkContainer>
        </Jumbotron>
    )
}

export default Banner
