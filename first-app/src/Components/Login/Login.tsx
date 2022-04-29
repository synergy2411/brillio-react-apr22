import { useState, useRef, useEffect } from "react";
import { Prompt } from "react-router-dom";
import classes from './Login.module.css';

const Login = () => {

    const cnfPasswordInputRef = useRef<HTMLInputElement>(null)

    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredPassword, setEnteredPassword] = useState<string>('')
    const [formState, setFormState] = useState<boolean>(false);
    const [showPrompt, setShowPrompt] = useState<boolean>(false);

    const [emailInputBlur, setEmailInputBlur] = useState<boolean>(false);
    const [passwordInputBlur, setPasswordInputBlur] = useState<boolean>(false);

    let emailIsValid = enteredEmail.trim() !== '';
    let emailIncludeAtSign = enteredEmail.includes('@');
    let emailIsValidAndBlurred = !emailIsValid && emailInputBlur;
    let emailIncludeAtSignAndBlurred = !emailIncludeAtSign && emailInputBlur;

    let passwordIsValid = enteredPassword.trim().length >= 6;
    let passwordIsValidAndBlurred = !passwordIsValid && passwordInputBlur;

    useEffect(() => {
        if(enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredPassword.trim().length >= 6){
            setFormState(true)
        }else{
            setFormState(false)
        }
    }, [enteredEmail, enteredPassword])

    let emailClasses = 'form-control';
    let passwordClasses = 'form-control';
    if(emailInputBlur){
        emailClasses =  emailIsValid && emailIncludeAtSign? 
                                `${classes['valid']}` : 
                                `${classes['invalid']}`;
    }
    if(passwordInputBlur){
        passwordClasses =  passwordIsValid ? 
                                `${classes['valid']}` : 
                                `${classes['invalid']}`;
    }

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
        console.log("Confirm Password : ", cnfPasswordInputRef.current?.value)
    }

    const passwordChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredPassword(event.target.value);
    }

    const passwordBlurHandler = () => {
        setPasswordInputBlur(true)
    }

    const formBlurHandler = () => {
        setShowPrompt(true)
    }

    return (
        <div className="row">
            <Prompt when={showPrompt} message="Are you sure to leave this page?"/>
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Login Form</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler} onBlur={formBlurHandler}>
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
                            {/* confirm password */}
                            <div className="form-group">
                                <label htmlFor="cnfpassword"> Confirm Password :</label>
                                <input type="text" 
                                    name="cnf-password" 
                                    id="cnf-password" 
                                    className="form-control"
                                    ref={cnfPasswordInputRef}
                                    />
                            </div>

                            {/* buttons */}
                            <div className="form-group">
                                <button disabled={!formState} type="submit" 
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