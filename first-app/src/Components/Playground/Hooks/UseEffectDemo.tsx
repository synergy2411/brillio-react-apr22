import { useEffect, useState } from "react";

const UseEffectDemo = () => { 

    const [counter, setCounter] = useState<number>(0)
    const [toggle, setToggle] = useState<boolean>(false)

    useEffect(() => {
        console.log("Use effect works")
        return () => {
            console.log("Clean up works")
        }
    }, [counter])

    return (
        <div>
            <h3>Use effect in action</h3>
            <p>Counter : { counter } </p>
            <button onClick={() => setCounter(counter + 1)}> Increase Counter</button>
            <button onClick={() => setToggle(!toggle)}> Toggle</button>
        </div>
    )

}

export default UseEffectDemo;