import React from 'react';
import './IncomingMessage.css';


function IncomingMessage(props) {
    return (
        <div className="incoming-message">
            <p>{props.message}</p>
        </div>
    )
}

export default IncomingMessage;