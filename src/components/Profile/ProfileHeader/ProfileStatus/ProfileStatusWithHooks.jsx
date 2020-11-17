import React, { useEffect, useState } from 'react'


function ProfileStatusWithHooks(props) {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    
    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ? <div>
                <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} type='text' value={status}></input>
            </div> : <div>
                    <p onClick={activateEditMode} >{props.status || 'Enter your status'}</p>
                </div>}
        </div>
    )
    /*state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            
        )
    }
*/
}

export default ProfileStatusWithHooks;