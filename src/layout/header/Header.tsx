import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <Menu />
      </Container>
    </S.Header>
  );
};
