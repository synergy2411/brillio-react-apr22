import { useState } from "react";

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [emailInputBlur, setEmailInputBlur] = useState<boolean>(false);

    let emailIsValid = enteredEmail.trim() !== '';
    let emailIncludeAtSign = enteredEmail.includes('@');
    let emailIsValidAndBlurred = !emailIsValid && emailInputBlur;
    let emailIncludeAtSignAndBlurred = !emailIncludeAtSign && emailInputBlur;
    let formIsValid = emailIsValid && emailIncludeAtSign;

    const nameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredEmail(event.target.value);
    }

    const nameBlurHandler = () => {
        setEmailInputBlur(true)
    }

    const submitHandler : React.FormEventHandler = (event) => {
        event.preventDefault();
        console.log("Email : ", enteredEmail);
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
                                <label htmlFor="email">Email :</label>
                                <input type="email" 
                                    name="email" 
                                    id="email" 
                                    className="form-control"
                                    value={enteredEmail}
                                    onChange={nameChangeHandler}
                                    onBlur={nameBlurHandler} />
                                    {/* {!emailIsValid ? <p>Email field is mandatory.</p> : ''} */}
                                    {emailIsValidAndBlurred && <p className="alert alert-danger">Email is required.</p>}
                                    {emailIncludeAtSignAndBlurred && <p className="alert alert-danger">Email must be in proper format.</p>}

                            </div>
                            {/* password */}
                            {/* buttons */}
                            <div className="form-group">
                                <button disabled={!formIsValid} type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;