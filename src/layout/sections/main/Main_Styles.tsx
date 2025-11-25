import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import styled from "styled-components";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 60px;

  @media ${theme.media.large} {
    ${FlexWrapper} {
      flex-direction: column-reverse;
      align-items: center;
    }
    div {
      text-align: center;
    }
  }
`;

const MainTitle = styled.h1`
  ${font({ family: "Tinos", weight: 400, Fmax: 20, Fmin: 16 })};
  margin: 27px 0 8px 8px;

  @media ${theme.media.large} {
    margin: 40px 0 8px 8px;
  }
`;

const Name = styled.span`
  ${font({ weight: 700, Fmax: 52, Fmin: 40 })};
  background: ${theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  letter-spacing: 0.1px;
  line-height: 23px;
  max-width: 470px;
  margin: 10px 0 37px 0;

  @media ${theme.media.large} {
    margin: 16px 0 37px 0;
    max-width: 370px;
    line-height: 25px;
  }
  @media ${theme.media.mobile} {
    max-width: 300px;
  }
`;

const Photo = styled.img`
  max-width: 461px;
  min-width: 285px;
  width: 100%;

  @media ${theme.media.large} {
    max-width: 400px;
  }
  @media ${theme.media.mobile} {
    max-width: 360px;
    padding: 0 10px;
  }
`;

const Arrow = styled.a`
  display: block;
  text-align: center;
  margin-top: 100px;

  @media ${theme.media.large} {
    display: none;
  }
`;

export const S = {
    Main,
    MainTitle,
    Name, 
    Text,
    Photo,
    Arrow
}