import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="center">
            <Skill iconId="js" title="javascript" />
            <Skill iconId="ts" title="typescript" />
            <Skill iconId="mongo" title="mongo db"/>
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
        </FlexWrapper>
    </StyledSkills>
  )
};

const StyledSkills = styled.section`
    background-color: #fbdffc;
    min-height: 100vh;
`
