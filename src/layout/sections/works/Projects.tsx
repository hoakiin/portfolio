import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectImg from "../../../assets/images/project.webp";
import { Container } from "../../../components/Container";
import { Tabs } from "./tabs/Tabs";
import { S } from "./Projects_Styles";
import { useState } from "react";
import { TabsStatusType } from "./tabs/Tabs";

// const tabsItems = ["All", "Landing Page", "React", "SPA"];

const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "SPA",
    status: "spa",
  },
];

const tags1 = ["Javascript", "PostgreSQL", "React", "Redux"];
const tags2 = ["Javascript", "React Native", "Redux"];

const projData = [
  {
    type: "react",
    title: "Timer",
    src: projectImg,
    tags: tags1,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    type: "spa",
    title: "Social Network",
    src: projectImg,
    tags: tags2,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export const Projects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredProjects = projData;

  if (currentFilterStatus === "landing") {
    filteredProjects = projData.filter((proj) => proj.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredProjects = projData.filter((proj) => proj.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredProjects = projData.filter((proj) => proj.type === "spa");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Tabs
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="stretch" wrap="wrap">
          {filteredProjects.map((p, index) => {
            return (
              <Project
                key={index}
                title={p.title}
                src={p.src}
                tags={p.tags}
                text={p.text}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
