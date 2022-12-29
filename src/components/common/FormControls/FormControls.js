
import styles from './FormControls.module.css';

const FormControls = ({input, meta, children}) => {
    const hasError = meta.error && meta.touched;

    return (
        <div className={styles.erContainer}>
            {children}
            {hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControls {...props}>
            <input {...input} {...restProps}/>
        </FormControls>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControls {...props}>
            <textarea {...input} {...restProps}/>
        </FormControls>
    )
}