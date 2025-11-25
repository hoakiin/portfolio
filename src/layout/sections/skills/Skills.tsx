import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";

const skillData = [
  {
    iconId: "html",
    title: "HTML",
  },
  {
    iconId: "css",
    title: "CSS",
  },
  {
    iconId: "js",
    title: "javascript",
  },
  {
    iconId: "ts",
    title: "typescript",
  },
  {
    iconId: "mongo",
    title: "mongo db",
  },
  {
    iconId: "pgsql",
    title: "PostgreSQL",
  },
  {
    iconId: "jest",
    title: "jest",
  },
  {
    iconId: "express",
    title: "express js",
  },
  {
    iconId: "nestjs",
    title: "nest js",
  },
  {
    iconId: "docker",
    title: "docker",
  },
  {
    iconId: "reactjs",
    title: "react js",
  },
  {
    iconId: "reactn",
    title: "react native",
  },
  {
    iconId: "styled",
    title: "Styled Components",
  },
  {
    iconId: "redux",
    title: "redux",
  },
  {
    iconId: "git",
    title: "git",
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <S.SkillsWrapper>
          {skillData.map((s, index) => {
            return <Skill iconId={s.iconId} key={index} title={s.title} />;
          })}
        </S.SkillsWrapper>
      </Container>
    </S.Skills>
  );
};
