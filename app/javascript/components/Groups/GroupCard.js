import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import ConfirmationModal from '../ConfirmationModal';

import { acceptInvite, declineInvite } from '../../actions/groupActions';

const GroupCard = (props) => {
    const dispatch = useDispatch();

    const handleAccept = (e) => {
        dispatch(acceptInvite(e.target.id))
    }

    const handleDecline = (e) => {
        dispatch(declineInvite(e.target.id))
    }

    const renderBody = () => {
        if(props.group) {
            return(<Card.Body>
                <Card.Title>Your Group!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Group Name: {props.group.groupName}</Card.Subtitle>
                <Card.Text>
                Number of Shared Sections: {props.group.sharedBlockCount}
                </Card.Text>
                <Button as={Link} to={`/group/${props.group.groupId}`} variant="dark">View Shared Sections!</Button>
            </Card.Body>)
        } else if (props.invite) {
            return(<Card.Body>
            <Card.Title>You've been invited!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Share your sections!</Card.Subtitle>
            <Card.Text>
            Group Name: {props.invite.groupName}<br/>
            Invited By: {props.invite.invitedBy}
            </Card.Text>
            <Button onClick={handleAccept} id={props.invite.groupId} size="sm" variant="dark">Accept Invitation!</Button> <ConfirmationModal type="decline group" parentClick={handleDecline}/>
        </Card.Body>)
        }
    }
    
     return(
        <Card style={{ width: '18rem' }}>
            {renderBody()}
        </Card>
    )
}

export default GroupCard;