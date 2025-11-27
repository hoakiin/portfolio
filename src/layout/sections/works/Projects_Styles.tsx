import { theme } from "../../../styles/Theme";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { font } from "../../../styles/Common";
import {css} from "styled-components";

const Projects = styled.section`
  margin: 0 0 140px 0;

  ${FlexWrapper} {
    gap: 30px;
  }

  @media ${theme.media.large} {
    margin: 0 0 90px 0;
  }
`;

//Project

const Project = styled.div`
  background-color: ${theme.colors.projectBg};
  max-width: 522px;
  width: 362px;
  flex-grow: 1;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  padding: 24px 26px 35px 26px;
  display: flex;
  flex-direction: column;
  height: 100%;

  a ~ a {
    margin-left: 12px;
  }

  @media ${theme.media.large} {
    padding: 16px 17px 35px 19px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.fontLight};
`;

const Text = styled.p`
  line-height: 24px;
  letter-spacing: 0.8px;
  margin-bottom: 30px;
  flex-grow: 1;
`;

const ButtonRow = styled.div``;

// Tags

const Tags = styled.ul`
  margin: 15px 0 18px 0;
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;

  li {
    white-space: nowrap;

    border: 1px solid transparent;
    border-radius: 4px;

    background-image: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%),
      linear-gradient(#262435, #262435),
      linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);

    background-clip: text, padding-box, border-box;

    -webkit-background-clip: text, padding-box, border-box;

    color: transparent;
    -webkit-text-fill-color: transparent;

    font-size: 11px;
    letter-spacing: 1.2px;
    padding: 7px 16px;
  }
`;

// Tabs
const Tabs = styled.nav`
  margin: 40px 0;

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

const ListItem = styled.li`
  position: relative;
`;

const Link = styled.button<{active: boolean}>`
  ${font({ Fmax: 14, Fmin: 12 })};
  text-transform: uppercase;
  letter-spacing: 1px;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${theme.colors.gradient};
    transition: width 0.4s ease;

    ${props => props.active && css<{active?: boolean}>`
      width: 100%;
    `}
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const S = {
  Projects,
  Project,
  Description,
  ButtonRow,
  ImageWrapper,
  Image,
  Title,
  Text,
  Tags,
  Tabs,
  ListItem,
  Link,
};
