import React from 'react';
import './ProfileInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import Textarea from '../../common/Textarea/Textarea'

let maxLength10 = maxLengthCreator(30);

function ProfileInput(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="post-input">
                <p className="input-header">What is on your mind?</p>
                <div className="input-block">
                    <Field component={Textarea} name="postTextarea" rows="8" cols="70" placeholder="Remember, be nice!" validate={[required, maxLength10]}></Field>
                    <button className="post-btn"><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </form>

    )
}

export default ProfileInput;