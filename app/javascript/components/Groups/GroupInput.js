import React, { useReducer } from 'react';
import { useDispatch }from 'react-redux'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


import { addGroup } from '../../actions/groupActions'

const initialState = {
    group_name: "",
    invite: ""   
}

const reducer = (state, { field, value })  => {
    return{
        ...state, 
        [field]: value
    }
}

const GroupInput = () => {

    const [state, inputDispatcher] = useReducer(reducer, initialState);
    
    const dispatch = useDispatch();

    const { group_name, invite} = state

    const onChange = (e) => {
        inputDispatcher({ field: e.target.name, value: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.classList = 'collapse'
        dispatch(addGroup(state))
    }

    return(
        <Accordion>
            <Card style={{ width: '18rem' }}>
            <Accordion.Toggle as={Card.Header} eventKey="input">
            Add Group!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="input">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Group Name:</Form.Label>
                    <Form.Control type="text" name="group_name" value={group_name}  onChange={onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Invite Another User?</Form.Label>
                    <Form.Control type="email" name="invite" value={invite}  onChange={onChange}/>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Create Group and Send Invite!
                </Button>
                </Form>
            </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
       )
}

export default GroupInput;