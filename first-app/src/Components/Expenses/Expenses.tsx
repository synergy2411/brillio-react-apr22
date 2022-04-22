import { useState } from 'react';
import { IExpense } from "../../model/expense.interface";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

let INTIAL_EXPENSES : Array<IExpense> = [
    { id: "e001", title: "grocery", createdAt: new Date("Dec 20, 2019"), amount: 12.9 },
    { id: "e002", title: "shopping", createdAt: new Date("Jan 2, 2020"), amount: 101 },
    { id: "e003", title: "insurance", createdAt: new Date("Aug 12, 2021"), amount: 19.9 },
]

const Expenses = () => {

    const [showComp, setShowComp] = useState<boolean>(false)
    const [expenses, setExpenses] = useState<Array<IExpense>>(INTIAL_EXPENSES)
   

    const clickHandler = () => {
        setShowComp(!showComp)
    }

    const addNewExpense = (expense : IExpense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState]
        })
        setShowComp(false);
    }

    return (
        <div>
            <p className="display-4 text-center">Expenses App</p>
            <div className="row">
                <div className="col-4 offset-4">
                    <button className="btn btn-block btn-dark" onClick={clickHandler} >
                        {showComp ? 'Hide Form' : 'Show Form'}
                        </button>
                </div>
            </div>
            <br/>
            { showComp ? <AddExpense onAddNewExpense={addNewExpense} /> : ''}
            <br/>
            <div className="row">
                <ExpenseItem expense={expenses[0]} />
                <ExpenseItem expense={expenses[1]}/>
                <ExpenseItem expense={expenses[2]}/>
            </div>
        </div>
    )
}

export default Expenses;