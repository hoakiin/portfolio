import { S } from "../Projects_Styles";

type TagsPropsType = {
  tagsItems: Array<string>;
};

export const Tags: React.FC<TagsPropsType> = (props: TagsPropsType) => {
  return (
    <S.Tags>
      {props.tagsItems.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </S.Tags>
  );
};
