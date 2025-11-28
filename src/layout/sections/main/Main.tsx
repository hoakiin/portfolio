import photo from "../../../assets/images/photo.svg";
import arrow from "../../../assets/images/arrow.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-around">
          <div>      
            <S.MainTitle>
              <p>Frontend Developer.</p>
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Making Web Magic Happen", "React Developer", "Crafting Web With Soul"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
            <S.Name>Kate Olesik</S.Name>
            <S.Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </S.Text>
            <Button as="a" href="#">
              Contact Me
            </Button>
          </div>

          <S.Photo src={photo} alt="photo" />
        </FlexWrapper>
        <S.Arrow href="#">
          <img src={arrow} alt="" />
        </S.Arrow>
      </Container>
    </S.Main>
  );
};
