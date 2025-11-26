import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Skills = styled.section`
  margin-bottom: 145px;

  @media ${theme.media.mobile} {
    margin-bottom: 80px;
  }
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  gap: 50px 15px;

  @media ${theme.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;


//Skill

const Skill = styled.div`
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

export const S = {
    Skills,
    SkillsWrapper,
    Skill,
    SkillTitle,
}
