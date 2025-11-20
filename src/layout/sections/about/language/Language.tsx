import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type Props = {
  name: string;
  percent: number;
  level: string;
};

export const Language = ({ name, percent, level }: Props) => {
  return (
    <Wrapper>
      <TopRow>
        <h3>{name}</h3>
        <span>{level}</span>
      </TopRow>

      <Bar>
        <Fill percent={percent} />
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.title};

  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  span {
    font-size: 14px;
    padding-right: 3px;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 20px;
  background: #262435;
  border-radius: 5px;
  overflow: hidden;
`;

const Fill = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background: ${theme.colors.gradient};
  border-radius: 4px;
`;