import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;

  @media ${theme.media.large} {
    gap: 40px;
  }

  ul {
    display: flex;
    gap: 67px;

    @media ${theme.media.large} {
      gap: 40px;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.font};
  display: inline-block;
  position: relative;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover, &.active {
    color: #93d5eb;
    transform: translateY(-2px);
  }
`;

export const S = {
  Menu,
  NavLink,
};
