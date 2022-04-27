import React, { useState } from 'react';
import { IExpense } from "../../model/expense.interface";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AuthContext from '../../context/AuthContext';

let INTIAL_EXPENSES: Array<IExpense> = [
    { id: "e001", title: "grocery", createdAt: new Date("Dec 20, 2019"), amount: 12.9 },
    { id: "e002", title: "shopping", createdAt: new Date("Jan 2, 2020"), amount: 101 },
    { id: "e003", title: "insurance", createdAt: new Date("Aug 12, 2021"), amount: 19.9 },
]

const Expenses = () => {

    const [showComp, setShowComp] = useState<boolean>(false)
    const [expenses, setExpenses] = useState<Array<IExpense>>(INTIAL_EXPENSES)
    const [selectedYear, setSelectedYear] = useState<string>('2019')

    const clickHandler = () => {
        setShowComp(!showComp)
    }

    const addNewExpense = (expense?: IExpense) => {
        if (expense) {
            setExpenses((prevState) => {
                return [expense, ...prevState]
            })
        }
        setShowComp(false);
    }

    const onDeleteExpenseById = (id: string) => {
        // const duplicateExpenses = expenses.filter(e => e.id !== id)
        setExpenses(prevState => prevState.filter(e => e.id !== id));
    }

    const onYearSelected = (selYear: string) => {
        setSelectedYear(selYear);
    }
    let filteredExpenses = expenses.filter(exp => {
        return exp.createdAt.getFullYear().toString() === selectedYear
    })

    return (
        <AuthContext.Provider value={{ isLoggedIn: false }}>
            <p className="display-4 text-center">Expenses App</p>
            <div className="row">
                <div className="col-4 offset-4">
                    <button className="btn btn-block btn-dark" onClick={clickHandler} >
                        {showComp ? 'Hide Form' : 'Show Form'}
                    </button>
                </div>
                <div className='col-4'>
                    <ExpenseFilter onSelectYear={onYearSelected} />
                </div>
            </div>
            <br />
            {showComp ? <AddExpense onAddNewExpense={addNewExpense} /> : ''}
            <br />
            <div className="row">
                {filteredExpenses.map(e => <ExpenseItem expense={e}
                    key={e.id}
                    onDeleteExpense={onDeleteExpenseById} />)}
            </div>
        </AuthContext.Provider>
    )
}

export default Expenses;