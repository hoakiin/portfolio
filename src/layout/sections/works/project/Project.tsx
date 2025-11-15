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
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <Button as="a" href="#">
          View Project
        </Button>
      </ImageWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Tags tagsItems={props.tags} />
        <Text>{props.text}</Text>
        <Button as="a" href="#">
          Demo
        </Button>
        <Button as="a" href="#" outlined>
          Code
        </Button>
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
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
    ${Button} {
        opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

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
  letter-spacing: 0.8px;
  margin-bottom: 30px;
`;
