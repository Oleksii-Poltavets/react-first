import React from "react";
import styles from './Login.module.css';
import { Form, Field } from 'react-final-form';
import { composeValidators, minLength, required } from "../../helpers/validate";
import { Input } from "../common/FormControls/FormControls";

const AutorisationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="login"
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
            <button className={styles.button} type="submit">Login</button>
        </form>
    )
};

const LoginForm = () => {
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
                <AutorisationForm handleSubmit={handleSubmit}/>
            )}
        />
    )
}

export default LoginForm;