import React from 'react';
import './DialogMessages.css';
import IncomingMessage from './IncomingMessage/IncomingMessage';
import OutgoingMessage from './OutgoingMessage/OutgoingMessage';



function DialogMessages(props) {
    
    

    let outMessagesElement = props.outMessage.map( m => <OutgoingMessage outMessage={m.message}/>);

    return (
        <div className="dialog-window">
            <div className="dialog-header">
                <img src={props.profileImg} alt="dialog-avatar"></img>
                <p>{props.profileName}</p>
            </div>
            <div className="message-window">
                <IncomingMessage message={props.message}/>
                {outMessagesElement}
            </div>
            
        </div>
    )
}

export default DialogMessages;