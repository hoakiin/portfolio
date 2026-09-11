import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Background = styled.section`
  margin-bottom: 100px;

  ${FlexWrapper} {
    gap: 50px;
    flex-wrap: wrap;
  }
`;

const Column = styled.div`
  width: calc(50% - 25px);

  @media ${theme.media.large} {
    width: 100%;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  line-height: 1.6;
`;

export const S = {
  Background,
  Column,
  ItemsWrapper,
  Years,
  Name,
  Text,
};
