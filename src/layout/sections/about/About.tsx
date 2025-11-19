import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <Text>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </Text>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: end;
`;

const Text = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.1px;
  margin: 0 0 130px 0;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: -20px;
    width: 5px;
    height: 90%;
    background: linear-gradient(360deg,#A1C4FD 0%, #C2E9FB 100%);
    border-radius: 2px;
  }
`;
