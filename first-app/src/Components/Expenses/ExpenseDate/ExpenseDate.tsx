import React, { useContext } from "react";
import AuthContext from '../../../context/AuthContext';

const ExpenseDate: React.FC<{ createdAt: Date }> = (props) => {

    const context = useContext(AuthContext);

    const day = props.createdAt.toLocaleString("en-US", { day: "numeric" });
    const month = props.createdAt.toLocaleString("en-US", { month: "long" });
    const year = props.createdAt.getFullYear()

    return (
        <div>
            {context.isLoggedIn && <p>Created At : {month} {day}, {year}</p>}
        </div>
        // <AuthContext.Consumer>
        //     {
        //          (context) => {
        //             return (
        //                 <div>
        //                     {context.isLoggedIn && <p>Created At : {month} {day}, {year}</p>}
        //                 </div>
        //                 )
        //         }
        //     }
        // </AuthContext.Consumer>
    )




}

export default ExpenseDate;