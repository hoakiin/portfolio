import styled from "styled-components";
import { Tags } from "../tags/Tags";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  tags: Array<string>;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="" />

      <Description>
        <Title>{props.title}</Title>
        <Tags tagsItems={props.tags} />
        <Text>{props.text}</Text>
        <Button as="a" href="#">Demo</Button>
        <Button as="a" href="#" outlined>Code</Button>
      </Description>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: ${theme.colors.projectBg};
  max-width: 522px;
  width: 100%;
`;

const Description = styled.div`
    padding: 24px 26px 35px 26px;

    a ~ a {
        margin-left: 12px;
    }
`

const Image = styled.img`
  width: 100%;
  height: 388px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.fontLight};
`;

const Text = styled.p`
  line-height: 24px;
  letter-spacing: .8px;
  margin-bottom: 30px;
`;
