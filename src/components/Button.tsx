import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    padding: 11px 18px;
    border-radius: 6px;
    background: ${theme.colors.gradient};
    color: ${theme.colors.fontDark};
    font-weight: 500;
`