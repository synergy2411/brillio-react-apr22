import { useRef, useState } from "react";


interface Goal {
    text : any;
    frequency : number;
}

const UseStateDemo = () => {

    const goalInputRef = useRef<HTMLInputElement>(null);
    const [goals, setGoals] = useState<Array<Goal>>([{ text : "Swimming", frequency : 5}]);

    const addGoalHandler = () => {
        let text = goalInputRef.current?.value.toString()
        let newGoal : Goal = { text , frequency : 4}
        setGoals((prevState) => {
            return [...prevState, newGoal]
        })
    }

    return (
        <div>
            <input type="text" ref={goalInputRef}/>
            <button type="button" onClick={addGoalHandler}>Add Goal</button>
            <hr />
            <ul>
                {goals.map(goal => <li key={goal.text}>{goal.text} - {goal.frequency}</li>)}
            </ul>
        </div>
    )
}

export default UseStateDemo;