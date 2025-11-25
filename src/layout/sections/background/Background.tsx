import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Item } from "./item/Item";
import { S } from "./Background_Styles";

const educationData = [
  {
    years: "1998 - 2004",
    name: "Bachelors in Engineering",
    text: "Piacentem substantiales um se sed esse haec Possit facis qui patriam.",
  },
];
const experienceData = [
  {
    years: "1998 - 2004",
    name: "Bachelors in Engineering",
    text: "Piacentem substantiales um se sed esse haec Possit facis qui patriam.",
  },
];

export const Background: React.FC = () => {
  return (
    <S.Background>
      <Container>
        <FlexWrapper>
          <div>
            <SectionTitle>Education</SectionTitle>
            <S.ItemsWrapper>
              {educationData.map((e, index) => {
                return (
                  <Item
                    key={index}
                    years={e.years}
                    name={e.name}
                    text={e.text}
                  />
                );
              })}
            </S.ItemsWrapper>
          </div>
          <div>
            <SectionTitle>Experience</SectionTitle>
            <S.ItemsWrapper>
              {experienceData.map((e, index) => {
                return (
                  <Item
                    key={index}
                    years={e.years}
                    name={e.name}
                    text={e.text}
                  />
                );
              })}
            </S.ItemsWrapper>
          </div>
        </FlexWrapper>
      </Container>
    </S.Background>
  );
};
