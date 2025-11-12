import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <SkillsWrapper>
        <Skill iconId="html" title="HTML" />
        <Skill iconId="css" title="CSS" />
        <Skill iconId="js" title="javascript" />
        <Skill iconId="ts" title="typescript" />
        <Skill iconId="mongo" title="mongo db" />
        <Skill iconId="pgsql" title="PostgreSQL" />
        <Skill iconId="jest" title="Jest" />
        <Skill iconId="express" title="Express JS" />
        <Skill iconId="nestjs" title="Nest JS" />
        <Skill iconId="docker" title="Docker" />
        <Skill iconId="reactjs" title="react js" />
        <Skill iconId="reactn" title="react native" />
        <Skill iconId="styled" title="Styled Components" />
        <Skill iconId="redux" title="Redux" />
        <Skill iconId="git" title="git" />
      </SkillsWrapper>
    </StyledSkills>
  );
};

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  row-gap: 50px;
`;

const StyledSkills = styled.section`
  background-color: #ffe2ff;
  min-height: 100vh;
`;
