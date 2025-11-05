import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper>
            <Skill/>
        </FlexWrapper>
    </StyledSkills>
  )
};

const StyledSkills = styled.section`
    background-color: #f6b2f7;
    min-height: 100vh;
`
