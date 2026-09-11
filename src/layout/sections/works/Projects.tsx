import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import { Container } from "../../../components/Container";
import { Tabs } from "./tabs/Tabs";
import { S } from "./Projects_Styles";
import { useState } from "react";
import { TabsStatusType } from "./tabs/Tabs";
import { AnimatePresence, motion } from "motion/react";
import { projData } from "./projData";

const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "React SPA",
    status: "react",
  },
  {
    title: "Next.js",
    status: "nextjs",
  },
];

export const Projects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");

  const filteredProjects =
    currentFilterStatus === "all"
      ? projData
      : projData.filter((project) =>
          project.categories.includes(currentFilterStatus),
        );

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Tabs
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="stretch" wrap="wrap">
          <AnimatePresence>
            {filteredProjects.map((p) => {
              return (
                <motion.div
                  style={{
                    maxWidth: "522px",
                    width: "362px",
                    flexGrow: 1,
                    margin: "0 auto",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={p.id}
                  layout
                >
                  <Project
                    key={p.id}
                    title={p.title}
                    src={p.src}
                    tags={p.tags}
                    text={p.text}
                    link={p.link}
                    demoLink={p.demoLink}
                    codeLink={p.codeLink}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
