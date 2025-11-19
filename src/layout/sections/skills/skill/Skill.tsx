import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

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
`;

const SkillTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-top: 15px;
`;
