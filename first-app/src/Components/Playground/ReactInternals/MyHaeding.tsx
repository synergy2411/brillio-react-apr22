import styled from 'styled-components';

const StyledHeading = styled.h4`
    color : blue;
`
const MyHeading = () => {
    console.log("My Heading component")
    return (
        <StyledHeading>The Heading - coming from nested child</StyledHeading>
    )
}

export default MyHeading;