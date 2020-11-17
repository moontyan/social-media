import React from 'react'
import { Field } from 'redux-form';
import './LoginForm.css'

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="login-form">
            <Field type="login" name="email" placeholder="login" component="input"></Field>
            <Field type="password" name="password" placeholder="password" component="input"></Field>
            <div className="remember-check">
                <p>Remember Me</p>
                <Field type="checkbox" name="rememberMe" component="input"></Field>
            </div>
            <button>Log In</button>
            {props.error ? <div className="login-error">
                {props.error}
            </div> : null}
        </form>
    )
}

export default LoginForm;