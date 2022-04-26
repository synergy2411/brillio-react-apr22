import { useState } from 'react';
import styled from 'styled-components';

let Wrapper = styled.div`
        border: 2px red solid;
    `;

let MyParagraph = styled.p`
          text-align : center;
    `
const MyStyledComponent: React.FC<{}> = (props) => {
const [ count, setCount ]= useState(0);

    const increaseHandler = () => {
        setCount(prevCounter => {
            return prevCounter+1
        });
    }

    if(count > 3){
        throw new Error("Count value should not greater than THREE")
    }

    return (
        <Wrapper>
            <MyParagraph>My Awesome Styled Paragraph</MyParagraph>
            <h4>Counter : {count} </h4>
            <button onClick={increaseHandler}>Increase</button>
        </Wrapper>
    )
}

export default MyStyledComponent;