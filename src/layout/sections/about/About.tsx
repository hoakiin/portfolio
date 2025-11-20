import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import image from "../../../assets/images/about.png";
import { Language } from "./language/Language";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper>
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
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: end;
  margin-bottom: 78px;

  ${FlexWrapper} {
    gap: 50px;
  }
`;

const Image = styled.img`
  width: 330px;
  height: 470px;
`;

const Information = styled.div`
  padding: 10px 0;
`;

const Text = styled.p`
  max-width: 600px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.1px;
  margin: 0 0 30px 0;
`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
