export const required = value => value ? undefined : 'Required field';
export const minLength = value => value.length >= 2 ? undefined : 'More than two simbols';
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);
export const emailValid = value => {
    if (!/^\w+([.-]?\w+)*@/.test(value)) {
        return 'Email should contain @ in adress'
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return 'Email should have ending after @ for example aaa@gmail.com'
    } else {
        return undefined;
    }
}