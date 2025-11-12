import styled from "styled-components";
import photo from "../../../assets/images/photo.svg";
import arrow from "../../../assets/images/arrow.svg";
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

      <Arrow href="#">
        <img src={arrow} alt="" />
      </Arrow>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
`;

const MainTitle = styled.h1``;

const Name = styled.span``;

const Arrow = styled.a``;
