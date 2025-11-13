import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${theme.colors.headerBg};
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
