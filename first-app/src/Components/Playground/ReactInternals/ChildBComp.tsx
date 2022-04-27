import React from 'react';

const ChildBComp : React.FC<{onChangeValue : () => void}>= () => {

    console.log("Child B Component");

    return (
        <div>
            <h4>Child B Component</h4>
        </div>
    )

}

export default  React.memo(ChildBComp);

// props.onChnageValue === props.previous.onChnageValue