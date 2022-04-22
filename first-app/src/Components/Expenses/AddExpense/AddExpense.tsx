import React, { useState } from "react";

const AddExpense: React.FC<{}> = (props) => {

    const [enteredTitle, setEnteredTitle] = useState<string>('');

    const addClickHandler = (event : React.SyntheticEvent) => {
        event.preventDefault();
        console.log("Title : ", enteredTitle);
    }

    const titleChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        // console.log("Title Value :", event.target.value)
        setEnteredTitle(event.target.value)
    }

    return (
        <div className="row">
            <div className="col-8 offset-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="text-center">Add New Expense</h5>
                        <form>
                            {/* title */}
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="title">Title :</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" 
                                            name="title" value={enteredTitle} 
                                            onChange={titleChangeHandler} />
                                    </div>
                                </div>
                            </div>
                            {/* Created At */}
                            {/* Amount */}
                            {/* Buttons */}
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary btn-block" 
                                            type="button" onClick={addClickHandler}>Add</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-warning btn-block">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddExpense;