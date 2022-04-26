import { useState } from "react";
import classes from './Login.module.css';

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredPassword, setEnteredPassword] = useState<string>('')

    const [emailInputBlur, setEmailInputBlur] = useState<boolean>(false);
    const [passwordInputBlur, setPasswordInputBlur] = useState<boolean>(false);

    let emailIsValid = enteredEmail.trim() !== '';
    let emailIncludeAtSign = enteredEmail.includes('@');
    let emailIsValidAndBlurred = !emailIsValid && emailInputBlur;
    let emailIncludeAtSignAndBlurred = !emailIncludeAtSign && emailInputBlur;

    let passwordIsValid = enteredPassword.trim().length >= 6;
    let passwordIsValidAndBlurred = !passwordIsValid && passwordInputBlur;

    let formIsValid = emailIsValid && emailIncludeAtSign && passwordIsValid;

    let emailClasses =  emailIsValid ? 
                            `${classes['valid']}` : 
                            `${classes['invalid']}`;
    let passwordClasses =  passwordIsValid ? 
                            `${classes['valid']}` : 
                            `${classes['invalid']}`;

    const nameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredEmail(event.target.value);
    }

    const nameBlurHandler = () => {
        setEmailInputBlur(true)
    }

    const submitHandler : React.FormEventHandler = (event) => {
        event.preventDefault();
        console.log("Email : ", enteredEmail);
        console.log("Password : ", enteredPassword);
    }

    const passwordChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredPassword(event.target.value);
    }

    const passwordBlurHandler = () => {
        setPasswordInputBlur(true)
    }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Login Form</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="username">Email :</label>
                                <input type="text" 
                                    name="username" 
                                    id="username" 
                                    className={emailClasses}
                                    value={enteredEmail}
                                    onChange={nameChangeHandler}
                                    onBlur={nameBlurHandler} />
                                    {/* {!emailIsValid ? <p>Email field is mandatory.</p> : ''} */}
                                    {emailIsValidAndBlurred && <p className="alert alert-danger">Email is required.</p>}
                                    {emailIncludeAtSignAndBlurred && <p className="alert alert-danger">Email must be in proper format.</p>}

                            </div>
                            {/* password */}
                            <div className="form-group">
                                <label htmlFor="password"> Password :</label>
                                <input type="password" 
                                    name="password" 
                                    id="password" 
                                    className={passwordClasses}
                                    onChange={passwordChangeHandler}
                                    value={enteredPassword}
                                    onBlur={passwordBlurHandler} />
                                    {passwordIsValidAndBlurred && <p className="alert alert-danger">Password must have 6 characters at least.</p>}
                            </div>
                            {/* buttons */}
                            <div className="form-group">
                                <button disabled={!formIsValid} type="submit" 
                                    className={classes['my-button']}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;