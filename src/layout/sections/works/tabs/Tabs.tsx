import { S } from "../Projects_Styles";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabsPropsType = {
  tabsItems: Array<{status: TabsStatusType, title: string}>,
  changeFilterStatus: (value: TabsStatusType | "spa") => void,
  currentFilterStatus: string
}

export const Tabs = (props: TabsPropsType) => {
  return (
    <S.Tabs>
      <ul>
        {props.tabsItems.map((item, index) => {
          return (
            <S.ListItem key={index}>
              <S.Link active={props.currentFilterStatus === item.status} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</S.Link>
            </S.ListItem>
          );
        })}
      </ul>
    </S.Tabs>
  );
};
