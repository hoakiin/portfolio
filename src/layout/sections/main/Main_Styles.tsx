import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;

  @media ${theme.media.large} {
    padding-top: 0px;
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
  ${font({ family: "Tinos", weight: 400, Fmax: 20, Fmin: 17 })};
  margin: 27px 0 8px 5px;

  p {
    display: none;
  }

  @media ${theme.media.large} {
    margin: 15px 0 8px 5px;
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
  position: relative;
  max-width: 350px;
  min-width: 205px;
  width: 100%;
  transform: scale(-1, 1);

  @media ${theme.media.large} {
    max-width: 300px;
    min-width: 105px;
  }
  @media ${theme.media.mobile} {
    max-width: 250px;
    min-width: 105px;
    padding: 0 10px;
  }
`;

const bounce = keyframes`
  0% { transform: translateY(0); }
  40% { transform: translateY(6px); }
  100% { transform: translateY(0); }
`;

const Arrow = styled.a`
  display: block;
  text-align: center;
  margin-top: 80px;
  cursor: pointer;
  animation: ${bounce} 2s ease-in-out infinite;
  animation-delay: 0.4s;

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
  Arrow,
};
