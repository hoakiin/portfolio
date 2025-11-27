import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { css } from "styled-components";

const MobileMenu = styled.nav``;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -120px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${({ isOpen }) =>
        isOpen &&
        css`
          transform: rotate(-45deg) translateY(0px);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${({ isOpen }) =>
        isOpen &&
        css`
          transform: rotate(45deg) translateY(0px);
        `}
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${theme.colors.headerBg};
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    align-items: center;
    flex-direction: column;
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
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  Link,
};
