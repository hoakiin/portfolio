import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  padding-bottom: 90px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 70px;

  @media ${theme.media.tablet} {
    gap: 60px;
  }

  @media ${theme.media.mobile} {
    gap: 50px;
  }
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    transition: all 0.5s ease;
  }

  &:hover {
    svg {
      scale: 1.1;
    }
  }
`;

const Name = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  margin: 11px 0 0 0;
  background: ${theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const Copyright = styled.small`
  font-size: 14px;
  letter-spacing: 1.3px;
  opacity: 0.7;
  margin-top: 46px;
  background: ${theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  Name,
  Copyright,
};
