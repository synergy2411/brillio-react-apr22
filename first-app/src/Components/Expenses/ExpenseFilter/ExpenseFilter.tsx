import React from "react";

const ExpenseFilter : React.FC<{onSelectYear: (selectedYear: string) => void}> = (props) => {

    const yearChangeHandler : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        props.onSelectYear(event.target.value)
    }

    return (
        <select className="form-control" onChange={yearChangeHandler}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    )
}

export default ExpenseFilter;