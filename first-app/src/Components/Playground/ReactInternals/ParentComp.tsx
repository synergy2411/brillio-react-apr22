import { useState } from "react";
import ChildAComp from "./ChildAComp";

const ParentComp = () => {
    const [show, setShow] = useState<boolean>(true)
    const [toggle, setToggle] = useState<boolean>(false)

    console.log("Parent Component");
    return (
        <>
        <h3>Parent Component</h3>
        <button onClick={() => setShow(!show)}>Show</button>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <ChildAComp show={show} />
        </>
    )

}

export default ParentComp;