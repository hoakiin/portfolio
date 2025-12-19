import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import image from "../../../assets/images/about-photo.svg";
import { Language } from "./language/Language";
import { S } from "./About_Styles";

export const About: React.FC = () => {
  return (
    <S.About id="about">
      <Container>
        <S.Wrapper>
          <S.Image src={image} />
          <S.Information>
            <SectionTitle>About me</SectionTitle>
            <S.Text>
              The long barrow was built on land previously inhabited in the
              Mesolithic period. It consisted of a sub-rectangular earthen
              tumulus, estimated to have been 15 metres (50 feet) in length,
              with a chamber built from sarsen megaliths on its eastern end.
              Both inhumed and cremated human remains were placed within this
              chamber during the Neolithic period.
            </S.Text>
          </S.Information>

          <S.Languages>
            <Language name="Russian" percent={100} level="Native" />
            <Language name="English" percent={60} level="B1" />
            <Language name="German" percent={40} level="A2" />
          </S.Languages>
        </S.Wrapper>
      </Container>
    </S.About>
  );
};
