import React from 'react';
import './DialogInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Field } from 'redux-form';


function DialogInput(props) {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="send-block">
                
                <Field component="textarea" name="messageTextarea" placeholder="Say hi"></Field>
                <button ><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </form>
        
    )
}

export default DialogInput;