import { Tags } from "../tags/Tags";
import { Button } from "../../../../components/Button";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  tags: Array<string>;
};

export const Project: React.FC<ProjectPropsType> = ({
  title,
  text,
  src,
  tags,
}) => {
  return (
    <S.Project>
      <S.ImageWrapper>
        <S.Image src={src} alt="" />
        <Button as="a" href="#">
          View Project
        </Button>
      </S.ImageWrapper>

      <S.Description>
        <S.Title>{title}</S.Title>
        <Tags tagsItems={tags} />
        <S.Text>{text}</S.Text>
        <S.ButtonRow>
          <Button as="a" href="#">
            Demo
          </Button>
          <Button as="a" href="#" outlined>
            Code
          </Button>
        </S.ButtonRow>
      </S.Description>
    </S.Project>
  );
};
