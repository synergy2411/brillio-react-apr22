import React, { useMemo } from "react";
import MyHeading from "./MyHaeding";

const ChildAComp : React.FC<{show : boolean}> = (props) => {

    // useMemo(()=> {}, [props.show])

    console.log("Child A Component");
    return (
        <>
           { props.show && <MyHeading />}
        </>
    )
}

export default React.memo(ChildAComp);

// props.show === props.previous.show