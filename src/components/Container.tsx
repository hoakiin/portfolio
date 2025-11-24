import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  min-height: 100%;
  padding: 0 30px;
  margin: 0 auto;
  
  @media ${theme.media.mobile} {
    padding: 0 15px;
  }
`;
