import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Background = styled.section`
  margin-bottom: 100px;

  ${FlexWrapper} {
    gap: 50px;

    @media ${theme.media.tablet} {
      flex-wrap: wrap;
    }
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
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

export const S = {
  Background,
  ItemsWrapper,
  Item,
  Years,
  Name,
  Text,
};
