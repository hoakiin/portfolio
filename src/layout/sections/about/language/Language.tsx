import { S } from "../About_Styles";

type LanguagePropsType = {
  name: string;
  percent: number;
  level: string;
};

export const Language: React.FC<LanguagePropsType> = ({ name, percent, level }: LanguagePropsType) => {
  return (
    <S.Language>
      <S.TopRow>
        <h3>{name}</h3>
        <span>{level}</span>
      </S.TopRow>

      <S.Bar>
        <S.Fill percent={percent} />
      </S.Bar>
    </S.Language>
  );
};
