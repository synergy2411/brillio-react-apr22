import { useState } from "react";
import Wrapper from "./Wrapper/Wrapper";

const Greetings = () => {

    const [show, setShow] = useState<boolean>(false)

    const showClickHandler = () => setShow(true);

    return (
        <div>
            <h3>Hi there!</h3>
            {/* <p>It's good to see you today</p> */}
            {show && <Wrapper>It's good to see you today</Wrapper>}
            <button onClick={showClickHandler}>Show Paragraph</button>
        </div>
    )

}

export default Greetings;