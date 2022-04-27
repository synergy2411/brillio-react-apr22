import { useState } from "react";
import ChildAComp from "./ChildAComp";

const ParentComp = () => {
    const [show, setShow] = useState<boolean>(true)

    console.log("Parent Component");
    return (
        <>
        <h3>Parent Component</h3>
        <button onClick={() => setShow(!show)}>Toggle Show</button>
            <ChildAComp show={true} />
        </>
    )

}

export default ParentComp;