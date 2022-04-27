import { useState, useCallback, useMemo } from "react";
import ChildAComp from "./ChildAComp";
import ChildBComp from "./ChildBComp";

const ParentComp = () => {
    const [show, setShow] = useState<boolean>(true)
    const [toggle, setToggle] = useState<boolean>(false)

    // const changeValue = useCallback(() => {
    //     console.log("The Value changes", toggle)
    // }, [toggle])

    const changeValue = useMemo(() => {
        return () => console.log("The Value changes", toggle)
    }, [toggle])

    console.log("Parent Component");
    return (
        <>
            <h3>Parent Component</h3>
            <button onClick={() => setShow(!show)}>Show</button>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>

            <ChildAComp show={show} />

            <ChildBComp onChangeValue={changeValue} />
        </>
    )

}

export default ParentComp;