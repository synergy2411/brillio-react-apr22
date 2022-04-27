import React from "react";
import MyHeading from "./MyHaeding";

const ChildAComp : React.FC<{show : boolean}> = (props) => {

    console.log("Child A Component");
    return (
        <>
           { props.show && <MyHeading />}
        </>
    )
}

export default ChildAComp;