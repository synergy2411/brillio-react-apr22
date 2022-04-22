import React from "react";
import { IExpense } from "../../../model/expense.interface";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

// const ExpenseItem = (props : {expense : IExpense}) => {
const ExpenseItem: React.FC<{ 
    expense: IExpense, 
    onDeleteExpense : (id : string) => void
}> = (props) => {

    return (
        <div className="col-4">
            <div className="card">
                <div className="card-header">
                    <h6 className="text-center"> {props.expense.title.toUpperCase()} </h6>
                </div>
                <div className="card-body">
                    <p>Amount : ${props.expense.amount}</p>
                    <ExpenseDate createdAt={props.expense.createdAt} />
                    <button onClick={() => props.onDeleteExpense(props.expense.id)} className="btn btn-outline-danger btn-block">
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    )

}

export default ExpenseItem;