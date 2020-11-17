import React from 'react';
import './OutgoingMessage.css';


function OutgoingMessage(props) {
    return (
        <div className="outgoing-message">
            <p>{props.outMessage}</p>
        </div>
    )
}

export default OutgoingMessage;