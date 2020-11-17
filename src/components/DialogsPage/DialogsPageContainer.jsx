import { connect } from 'react-redux';
import DialogsPage from './DialogsPage';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/dialogs-reducer'
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs : state.dialogsPage.dialogs,
        messages : state.dialogsPage.messages,
        outMessages : state.dialogsPage.outMessages
    }
}



export default compose(withAuthRedirect, 
    connect(mapStateToProps, { addMessage }))(DialogsPage);