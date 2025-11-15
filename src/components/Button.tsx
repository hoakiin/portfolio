import styled from "styled-components";
import { theme } from "../styles/Theme";
import { css } from "styled-components";

type ButtonPropsType = {
  outlined?: boolean;
};

export const Button = styled.button<ButtonPropsType>`
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
      border: 2px solid transparent;
      background-image: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%),
        linear-gradient(#262435, #262435),
        linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
      background-clip: text, padding-box, border-box;
      -webkit-background-clip: text, padding-box, border-box;
      color: transparent;
      -webkit-text-fill-color: transparent;
    `}
`;
