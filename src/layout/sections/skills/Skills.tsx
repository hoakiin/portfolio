import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

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
    iconId: "sass",
    title: "SCSS",
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
    iconId: "reactjs",
    title: "react",
  },
  {
    iconId: "next",
    title: "Next.js",
  },
  {
    iconId: "redux",
    title: "redux Toolkit",
  },
  {
    iconId: "tanstack",
    title: "TanStack Query",
  },
  {
    iconId: "git",
    title: "git",
  },
  {
    iconId: "react-hook-form",
    title: "React Hook Form",
  },
  {
    iconId: "zod",
    title: "Zod",
  }
];

export const Skills: React.FC = () => {
  const isMobile = window.innerWidth < 769;

  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <S.SkillsWrapper>
          {!isMobile ? (
            <Fade cascade damping={0.1} triggerOnce>
              {skillData.map((s, index) => (
                <Skill iconId={s.iconId} key={index} title={s.title} />
              ))}
            </Fade>
          ) : (
            skillData.map((s, index) => (
              <Skill iconId={s.iconId} key={index} title={s.title} />
            ))
          )}
        </S.SkillsWrapper>
      </Container>
    </S.Skills>
  );
};
