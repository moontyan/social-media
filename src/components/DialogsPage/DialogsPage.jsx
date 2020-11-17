import React from 'react';
import './DialogsPage.css';
import DialogPreview from './DialogPreview/DialogPreview';
import DialogMessages from './DialogMessages/DialogMessages';
import DialogInputContainer from './DialogInput/DialogInputContainer';
import { reduxForm } from 'redux-form'

function DialogsPage(props) {
    let dialogElements = props.dialogs.map( dialog => <DialogPreview id={dialog.id} profileName={dialog.profileName} profileImg={dialog.profileImg}/>)
    

    let messageElements = props.messages.map( message => <DialogMessages id={message.id} profileImg={message.profileImg} profileName={message.profileName} message={message.message} outMessage={props.outMessages} />)
    
    const onSubmit = (values) => {
        props.addMessage(values.messageTextarea)
    }
    return (
        <div className="dialogs-page">
            <div className="dialogs-minimized">
                {dialogElements}
            </div>
            <div className="messages-container">
                {messageElements}
                <MessagesReduxForm onSubmit={onSubmit} />
            </div>
            
        </div>
    )
}

let MessagesReduxForm = reduxForm({form: 'messages'})(DialogInputContainer)

export default DialogsPage;