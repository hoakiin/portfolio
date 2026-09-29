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
              I’m a frontend developer who enjoys creating clean, user-friendly
              interfaces and bringing ideas to life through code. I work mainly
              with React, TypeScript and Next.js, with a focus on responsive web
              applications and thoughtful user experiences. I’m always exploring
              new technologies, taking on new challenges and finding ways to
              improve with every project.
            </S.Text>
          </S.Information>

          <S.Languages>
            <Language name="Russian" percent={100} level="Native" />
            <Language name="English" percent={65} level="B1+" />
            <Language name="German" percent={50} level="B1" />
          </S.Languages>
        </S.Wrapper>
      </Container>
    </S.About>
  );
};
