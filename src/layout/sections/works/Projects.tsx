import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectImg from "../../../assets/images/project.webp";
import { Container } from "../../../components/Container";
import { Tabs } from "./tabs/Tabs";
import { S } from "./Projects_Styles";

const tabsItems = ["All", "Landing Page", "React", "SPA"];
const tags1 = ["Javascript", "PostgreSQL", "React", "Redux"];
const tags2 = ["Javascript", "React Native", "Redux"];

const projData = [
  {
    title: "TITLE PROJECT",
    src: projectImg,
    tags: tags1,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "TITLE PROJECT",
    src: projectImg,
    tags: tags2,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Tabs tabs={tabsItems} />
        <FlexWrapper justify="space-between" align="stretch" wrap="wrap">
          {projData.map((p, index) => {
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
