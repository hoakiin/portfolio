import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const About = styled.section`
position: relative;
  min-height: 80vh;
  display: flex;
  align-items: end;
  margin-bottom: 78px;

  @media ${theme.media.large} {
    margin: 100px 0 70px 0;
    align-items: unset;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 330px minmax(0, 600px);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "image information"
    "image languages";
  grid-column-gap: 40px;
  grid-row-gap: 30px;

  @media ${theme.media.large} {
    justify-content: center;
    grid-template-columns: auto-fit minmax(0, 300px);
    grid-template-rows: auto auto;
    grid-template-areas:
      "image information"
      "languages languages";
    grid-gap: 40px;
  }

  @media ${theme.media.tablet} {
    justify-content: center;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "information"
      "languages";
    grid-column-gap: 0;
    grid-row-gap: 40px;
  }
`;

const Image = styled.img`
  width: 330px;
  height: 450px;
  grid-area: image;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Information = styled.div`
  grid-area: information;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.1px;
  width: 100%;

  @media ${theme.media.tablet} {
    max-width: 600px;
  }
`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  grid-area: languages;
`;


// Language 

const Language = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.title};

  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  span {
    font-size: 14px;
    padding-right: 3px;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 20px;
  background: #262435;
  border-radius: 5px;
  overflow: hidden;
`;

const Fill = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background: ${theme.colors.gradient};
  border-radius: 4px;
`;

export const S = {
    About,
    Wrapper,
    Image,
    Information,
    Text,
    Languages,
    Language,
    TopRow,
    Bar,
    Fill
}