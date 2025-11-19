import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
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
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  margin-bottom: 145px;
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 50px 15px;
`;
