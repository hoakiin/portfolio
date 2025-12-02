import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

const socialItemsData = [
  {
    iconId: "gmail",
    name: "gmail",
    href: "mailto:hoakiin.dev@gmail.com",
  },

  {
    iconId: "linkedin",
    name: "linkedin",
    href: "#",
  },

  {
    iconId: "github",
    name: "github",
    href: "https://github.com/hoakiin",
  },

  {
    iconId: "telegram",
    name: "telegram",
    href: "https://t.me/hoakiin",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column" align="center">
          <S.SocialList>
            {socialItemsData.map((s, index) => {
              return (
                <S.SocialItem key={index}>
                  <S.SocialLink href={s.href} target="_blank">
                    <Icon
                      width="37px"
                      height="37px"
                      iconId={s.name}
                      viewBox="0 0 38 38"
                    />
                    <S.Name>{s.name}</S.Name>
                  </S.SocialLink>
                </S.SocialItem>
              );
            })}
          </S.SocialList>
          <S.Copyright>WEB DEVELOPER 2025</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
