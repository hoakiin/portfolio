import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { S } from "./Header_Styles";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
