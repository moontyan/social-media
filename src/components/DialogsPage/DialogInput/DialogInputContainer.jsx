import './DialogInput.css';
import DialogInput from './DialogInput';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        newMessageText : state.dialogsPage.newMessageText
    }
}

const DialogInputContainer = connect(mapStateToProps)(DialogInput);

export default DialogInputContainer;