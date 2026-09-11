import { S } from "../Background_Styles";

type ItemPropsType = {
  years: string;
  name: string;
  text: string;
};

export const Item : React.FC<ItemPropsType>= ({ years, name, text }: ItemPropsType) => {
  return (
    <>
      <S.Years>{years}</S.Years>
      <S.Name>{name}</S.Name>
      <S.Text>{text}</S.Text>
    </>
  );
};
