import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

type TabsPropsType = {
  tabs: Array<string>;
};

export const Tabs = (props: TabsPropsType) => {
  return (
    <StyledTabs>
      <ul>
        {props.tabs.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabs>
  );
};

const StyledTabs = styled.nav`
  margin: 40px 0;

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

const ListItem = styled.li`
  position: relative;
`;

const Link = styled.a`
  ${font({Fmax: 14, Fmin: 12 })};
  text-transform: uppercase;
  letter-spacing: 1px;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${theme.colors.gradient};
    transition: width 0.4s ease;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
