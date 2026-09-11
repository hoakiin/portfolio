import { Tags } from "../tags/Tags";
import { Button } from "../../../../components/Button";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  tags: Array<string>;
  link: string;
  demoLink: string;
  codeLink: string;
};

export const Project: React.FC<ProjectPropsType> = ({
  title,
  text,
  src,
  tags,
  link,
  demoLink,
  codeLink,
}) => {
  return (
    <S.Project>
      <S.ImageWrapper>
        <S.Image src={src} alt="" />
        <Button as="a" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </S.ImageWrapper>

      <S.Description>
        <S.Title>{title}</S.Title>
        <Tags tagsItems={tags} />
        <S.Text>{text}</S.Text>
        <S.ButtonRow>
          <Button as="a" href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </Button>
          <Button as="a" href={codeLink} target="_blank" rel="noopener noreferrer" outlined>
            Code
          </Button>
        </S.ButtonRow>
      </S.Description>
    </S.Project>
  );
};
