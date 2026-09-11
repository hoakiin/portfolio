import photo from "../../../assets/images/main-photo.svg";
import arrow from "../../../assets/images/arrow.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

export const Main: React.FC = () => {
  return (
    <S.Main id="main">
      <Container>
        <FlexWrapper justify="space-around">
          <div>
            <S.MainTitle>
              <p>Frontend Developer.</p>
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Turning Ideas Into Code"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
            <S.Name>Kate Olesik</S.Name>
            <S.Text>
              Building clean, responsive and intuitive web applications using
              React, TypeScript and Next.js.
            </S.Text>
            <Button as={Link} to={"contacts"} smooth={true} offset={-90}>
              Contact Me
            </Button>
            <Button
              as="a"
              href={`${import.meta.env.BASE_URL}cv/CV_Ekaterina_Olesik_Frontend_Developer.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              outlined
              style={{ marginLeft: "25px" }}
            >
              Open CV
            </Button>
          </div>

          <S.Photo src={photo} alt="photo" />
        </FlexWrapper>

        <S.Arrow as={Link} to={"about"} smooth={true} offset={-10}>
          <img src={arrow} alt="" />
        </S.Arrow>
      </Container>
    </S.Main>
  );
};
