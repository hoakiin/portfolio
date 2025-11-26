import styled from "styled-components";
import { theme } from "../styles/Theme";
import { css } from "styled-components";

type ButtonPropsType = {
  outlined?: boolean;
};

export const Button = styled.button<ButtonPropsType>`
  display: inline-block;
  padding: 12px 18px;
  border-radius: 6px;
  background: ${theme.colors.gradient};
  color: ${theme.colors.fontDark};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ outlined }) =>
    outlined &&
    css`
      border: 2px solid #c2e9fb;
      background: transparent;
      color: #c2e9fb;
      &:hover {
        filter: brightness(0.7);
      }
    `}

  &:hover {
    filter: brightness(0.75);
  }
`;
