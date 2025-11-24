import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import image from "../../../assets/images/about.png";
import { Language } from "./language/Language";
import { theme } from "../../../styles/Theme";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        {/* <FlexWrapper>
          <Image src={image} />
          <Information>
            <SectionTitle>About me</SectionTitle>
            <Text>
              The long barrow was built on land previously inhabited in the
              Mesolithic period. It consisted of a sub-rectangular earthen
              tumulus, estimated to have been 15 metres (50 feet) in length,
              with a chamber built from sarsen megaliths on its eastern end.
              Both inhumed and cremated human remains were placed within this
              chamber during the Neolithic period, representing at least nine or
              ten individuals.
            </Text>
            <Languages>
              <Language name="Russian" percent={100} level="Native" />
              <Language name="English" percent={60} level="B1" />
              <Language name="German" percent={40} level="A2" />
            </Languages>
          </Information>
        </FlexWrapper> */}

        <Wrapper>
          <Image src={image} />
          <Information>
            <SectionTitle>About me</SectionTitle>
            <Text>
              The long barrow was built on land previously inhabited in the
              Mesolithic period. It consisted of a sub-rectangular earthen
              tumulus, estimated to have been 15 metres (50 feet) in length,
              with a chamber built from sarsen megaliths on its eastern end.
              Both inhumed and cremated human remains were placed within this
              chamber during the Neolithic period, representing at least nine or
              ten individuals.
            </Text>
          </Information>

          <Languages>
            <Language name="Russian" percent={100} level="Native" />
            <Language name="English" percent={60} level="B1" />
            <Language name="German" percent={40} level="A2" />
          </Languages>
        </Wrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: end;
  margin-bottom: 78px;

  @media ${theme.media.large} {
    margin: 100px 0 70px 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 330px minmax(0, 600px);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "image information"
    "image languages";
  grid-column-gap: 40px;
  grid-row-gap: 30px;

  @media ${theme.media.large} {
    justify-content: center;
    grid-template-columns: auto-fit minmax(0, 300px);
    grid-template-rows: auto auto;
    grid-template-areas:
      "image information"
      "languages languages";
    grid-gap: 40px;
  }

  @media ${theme.media.tablet} {
    justify-content: center;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "information"
      "languages";
    grid-column-gap: 0;
    grid-row-gap: 40px;
  }
`;

const Image = styled.img`
  width: 330px;
  height: 450px;
  grid-area: image;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Information = styled.div`
  grid-area: information;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.1px;
  width: 100%;

  @media ${theme.media.tablet} {
    max-width: 600px;
  }
`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  grid-area: languages;
`;
