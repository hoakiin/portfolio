import styled from "styled-components";
import photo from "../../../assets/images/photo.svg";
import arrow from "../../../assets/images/arrow.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between">
          <div>
            <MainTitle>WEB DEVELOPER</MainTitle>
            <Name>Erica Font</Name>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </Text>
            <Button as="a" href="#">
              Contact Me
            </Button>
          </div>

          <Photo src={photo} alt="photo" />
        </FlexWrapper>
        <Arrow href="#">
          <img src={arrow} alt="" />
        </Arrow>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

const MainTitle = styled.h1`
  font-size: 20px;
  font-family: "Tinos";
  font-weight: 400;
  margin: 27px 0 8px 8px;
`;

const Name = styled.span`
  font-size: 72px;
  font-weight: 600;
  background: ${theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  letter-spacing: 0.1px;
  line-height: 23px;
  width: 470px;
  margin: 10px 0 37px 0;
`;

const Photo = styled.img`
  width: 461px;
  height: 330px;
`;

const Arrow = styled.a`
  display: block;
  text-align: center;
  margin-top: 100px;
`;
