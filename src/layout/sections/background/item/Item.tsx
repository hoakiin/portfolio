import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type ItemPropsType = {
  years: string;
  name: string;
  text: string;
};

export const Item = ({ years, name, text }: ItemPropsType) => {
  return (
    <StyledItem>
      <Years>{years}</Years>
      <Name>{name}</Name>
      <Text>{text}</Text>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  @media ${theme.media.large} {
    max-width: 330px;
    max-width: 100%;
  }
  @media ${theme.media.tablet} {
    max-width: 100%;
  }
`;

const Years = styled.p`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 14px 0;
`;

const Text = styled.p`
  font-size: 15px;
`;
