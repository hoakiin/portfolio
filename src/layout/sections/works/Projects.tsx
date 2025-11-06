import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectImg from '../../../assets/images/project.webp'

const items1 = ["Javascript", "PostgreSQL", "React", "Redux"];
const items2 = ["Javascript", "React Native", "Redux"]


export const Projects = () => {
  return (
    <StyledWorks>
      <SectionTitle>Works</SectionTitle>
      <FlexWrapper justify="space-around">
        <Project
          title="TITLE PROJECT"
          src={projectImg}
          tags={items1}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Project
          title="I N S I G H T G R A M"
          src={projectImg}
          tags={items2}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: #e5e4ff;
  min-height: 100vh;
`;
