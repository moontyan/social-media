import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import './Login.css'
import LoginForm from './LoginForm/LoginForm'
import { logIn, logOut} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

function Login(props) {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
        
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default connect(mapStateToProps, { logIn, logOut })(Login);