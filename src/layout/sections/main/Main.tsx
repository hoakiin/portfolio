import styled from "styled-components";
import photo from "../../../assets/images/photo.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        <div>
          <MainTitle>WEB DEVELOPER</MainTitle>
          <Name>Erica Font</Name>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </p>
        </div>

        <img src={photo} alt="photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
    background-color: #bcecd5;
    min-height: 100vh;
`

const MainTitle = styled.h1`
   
`

const Name = styled.h2`
   
`