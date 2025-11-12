import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
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
        </SocialList>
        <Copyright>WEB DEVELOPER 2025</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 90px;
`;

const SocialItem = styled.li`
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
`;

const Copyright = styled.small`
`;
