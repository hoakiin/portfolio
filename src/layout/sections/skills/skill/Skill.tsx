import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";


type SkillPropsType = {
  iconId: string;
  title: string;
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 20%;
  text-align: center;
`

const SkillTitle = styled.div`
    
`