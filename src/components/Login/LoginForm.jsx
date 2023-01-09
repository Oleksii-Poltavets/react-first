import React from "react";
import styles from './Login.module.css';
import { Form, Field } from 'react-final-form';
import { composeValidators, minLength, required } from "../../helpers/validate";
import { Input } from "../common/FormControls/FormControls";
import { loginTC } from "../../redux/userAuthReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const AutorisationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="email"
            validate={composeValidators(required, minLength)}
            component={Input}
            className={styles.input}
            type="email"
            placeholder="Email"/>
            <Field name="password"
            validate={composeValidators(required, minLength)}
            component={Input}
            type="password"
            placeholder="Password"
            className={styles.input}/>
            { props.errorMessages.length > 0 && 
                <div className={styles.authError}>
                    {props.errorMessages}
                </div>
            }
            <button className={styles.button} type="submit">Login</button>
        </form>
    )
};

const LoginForm = (props) => {
    const onSubmit = (values) => {
        let {email, password, rememberMe} = values;
        props.loginTC(email, password, rememberMe);
    }
    if(props.isAuth) return <Navigate to="/profile"/>
    return (
        <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
                <AutorisationForm handleSubmit={handleSubmit} errorMessages={props.errorMessages}/>
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        errorMessages: state.userAuth.errorMessages
    }
}
export default connect(mapStateToProps, {loginTC})(LoginForm);