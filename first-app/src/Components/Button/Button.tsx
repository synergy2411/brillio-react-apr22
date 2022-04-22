import React from "react";

const Button : React.FC<{
    text : string,
    border? : string,
    color? : string,
    bgColor? : string
    onBtnClick : (event : React.FormEvent) => void
}> = (props) => {

    const style = {
        color : props.color,
        backgroundColor : props.bgColor,
        border : props.border
    }

    return (
        <button style={style} onClick={(event) => props.onBtnClick(event)}>{props.text}</button>
    )

}

export default Button;