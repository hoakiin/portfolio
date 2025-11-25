import { S } from "../Projects_Styles";

type TabsPropsType = {
  tabs: Array<string>;
};

export const Tabs: React.FC<TabsPropsType> = (props: TabsPropsType) => {
  return (
    <S.Tabs>
      <ul>
        {props.tabs.map((item, index) => {
          return (
            <S.ListItem key={index}>
              <S.Link href="#">{item}</S.Link>
            </S.ListItem>
          );
        })}
      </ul>
    </S.Tabs>
  );
};
