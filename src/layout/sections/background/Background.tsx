import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Item } from "./item/Item";
import { theme } from "../../../styles/Theme";

export const Background = () => {
  return (
    <StyledBackground>
      <Container>
        <FlexWrapper>
          <div>
            <SectionTitle>Education</SectionTitle>
            <ItemsWrapper>
              <Item
                years="1998 - 2004"
                name="Bachelors in Engineering"
                text="iacentem substantiales um se sed esse haec Possit facis qui patriam."
              />
            </ItemsWrapper>
          </div>
          <div>
            <SectionTitle>Experience</SectionTitle>
            <ItemsWrapper>
              <Item
                years="1998 - 2004"
                name="Bachelors in Engineering"
                text="iacentem substantiales um se sed esse haec Possit facis qui patriam."
              />
            </ItemsWrapper>
          </div>
        </FlexWrapper>
      </Container>
    </StyledBackground>
  );
};

const StyledBackground = styled.section`
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
