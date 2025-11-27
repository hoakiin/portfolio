import React from "react";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { S } from "./Header_Styles";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 769;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? <MobileMenu /> : <Menu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
