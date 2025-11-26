import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  background: ${theme.colors.headerBg};
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  @media ${theme.media.tablet} {
    padding: 12px 0px;
  }
`;

export const S = {
  Header
};