import styled from 'styled-components';

const MyStyledComponent: React.FC<{}> = (props) => {
    let Wrapper = styled.div`
        border: 2px red solid;
        width: 60vw;
        height: 60vh;
        padding: 12px;
        left : 20px;
        &:hover{
            background-color : lightgrey;
        }
        @media screen and (min-width: 768px) {
            &{
              background-color: blue;
            }
          }
    `;

    let MyParagraph = styled.p`
          text-align : center;
    `

    return (
        <Wrapper>
            <MyParagraph>My Awesome Styled Paragraph</MyParagraph>
        </Wrapper>
    )
}

export default MyStyledComponent;