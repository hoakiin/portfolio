import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SocialList>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  width="37px"
                  height="37px"
                  iconId="gmail"
                  viewBox="0 0 38 38"
                />
                <Name>Gmail</Name>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  width="37px"
                  height="37px"
                  iconId="linkedin"
                  viewBox="0 0 38 38"
                />
                <Name>linkedin</Name>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  width="37px"
                  height="37px"
                  iconId="github"
                  viewBox="0 0 38 38"
                />
                <Name>Github</Name>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  width="37px"
                  height="37px"
                  iconId="telegram"
                  viewBox="0 0 38 38"
                />
                <Name>Telegram</Name>
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>WEB DEVELOPER 2025</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding-bottom: 80px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 85px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover span {
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Name = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  margin: 11px 0 0 0;
`;

const Copyright = styled.small`
  font-size: 14px;
  letter-spacing: 1.3px;
  opacity: 0.7;
  margin-top: 46px;
`;
