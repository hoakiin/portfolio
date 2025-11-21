import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  text-align: center;

  @media ${theme.media.mobile} {
    svg {
      scale: .85;
    }
  }
`;

const SkillTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-top: 15px;

  @media ${theme.media.large} {
    ${font({ Fmax: 16, Fmin: 13 })};
    margin-top: 10px;
  }
`;
