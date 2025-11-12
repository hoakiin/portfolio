import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;
