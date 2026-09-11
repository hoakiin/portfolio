import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Item } from "./item/Item";
import { S } from "./Background_Styles";

const educationData = [
  {
    years: "2025 - 2026",
    name: "IT-INCUBATOR",
    text: "Intensive training in modern frontend development, covering JavaScript, TypeScript, React, Next.js, Redux Toolkit, RTK Query, REST APIs and Git.",
  },
];
const experienceData = [
  {
    years: "2026 - Present",
    name: "IT-INCUBATOR | Intern",
    text: "Developing a social media platform for creating and sharing photo stories. Working with Next.js, TypeScript, SCSS, Radix UI and TanStack Query to build responsive, reusable interfaces and integrate REST APIs.",
  },
];

export const Background: React.FC = () => {
  return (
    <S.Background id="background">
      <Container>
        <FlexWrapper>
          <S.Column>
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
          </S.Column>
          <S.Column>
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
          </S.Column>
        </FlexWrapper>
      </Container>
    </S.Background>
  );
};
