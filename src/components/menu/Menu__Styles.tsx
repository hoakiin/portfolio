import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;

  @media ${theme.media.large} {
    gap: 40px;
  }
  @media ${theme.media.tablet} {
    display: none;
  }

  ul {
    display: flex;
    gap: 67px;

    @media ${theme.media.large} {
      gap: 40px;
    }
  }
`;

const Link = styled.a`
  color: ${theme.colors.font};
  display: inline-block;
  position: relative;
  transition: all 0.4s ease;

  &:hover {
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateY(-1px);
  }
`;

export const S = {
  Menu,
  Link,
};
