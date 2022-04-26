import { useState } from "react";

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [emailInputBlur, setEmailInputBlur] = useState<boolean>(false);

    // const [emailIsValid, setEmailIsValid] = useState<boolean>(true);

    const nameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredEmail(event.target.value);
    }

    const submitHandler : React.FormEventHandler = (event) => {
        event.preventDefault();
        console.log("Email : ", enteredEmail);
    }

    const nameBlurHandler = () => {
        setEmailInputBlur(true)
    }

    let emailIsValid = enteredEmail.trim() !== '';
    let emailIsValidAndBlurred = !emailIsValid && emailInputBlur;

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

                            </div>
                            {/* password */}
                            {/* buttons */}
                            <div className="form-group">
                                <button disabled={!emailIsValid} type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;