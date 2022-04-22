import React, { useState } from "react";
import { v4 } from 'uuid';
import { IExpense } from "../../../model/expense.interface";

const AddExpense: React.FC<{
    onAddNewExpense : (exp? : IExpense | undefined) => void
}> = (props) => {

    const [enteredTitle, setEnteredTitle] = useState<string>('');
    const [enteredCreatedAt, setEnteredCreatedAt] = useState<string>('');
    const [enteredAmount, setEnteredAmount] = useState<string>('')

    const addClickHandler = (event : React.SyntheticEvent) => {
        event.preventDefault();
        let newExpense : IExpense = {
            amount : parseInt(enteredAmount),
            title : enteredTitle,
            createdAt : new Date(enteredCreatedAt),
            id : v4()
        }
        props.onAddNewExpense(newExpense)
    }

    const titleChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        // console.log("Title Value :", event.target.value)
        setEnteredTitle(event.target.value)
    }

    const createdAtChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => setEnteredCreatedAt(event.target.value)
    const amountChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => setEnteredAmount(event.target.value)

    const cancelClickHandler = () => {
        props.onAddNewExpense()
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
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="createdAt">Date :</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="date" value={enteredCreatedAt} 
                                            onChange = { createdAtChangeHandler }
                                            max="2022-12-31" min="2019-01-01" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            {/* Amount */}
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="amount">Amount :</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="number" step="0.1" min="0.1" 
                                            className="form-control" value={enteredAmount}
                                            onChange = {amountChangeHandler}/>
                                    </div>
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary btn-block" 
                                            type="button" onClick={addClickHandler}>Add</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-warning btn-block"
                                            type="button" onClick={cancelClickHandler}>Cancel</button>
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