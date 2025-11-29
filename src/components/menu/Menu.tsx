import { Link } from "react-scroll";
import { Button } from "../Button";
import { S } from "./Menu__Styles";

const items = [
  {
    title: "Home",
    href: "main",
    offset: 0
  },
  {
    title: "About",
    href: "about",
    offset: 50
  },
  {
    title: "Projects",
    href: "projects",
    offset: -80
  },
  {
    title: "Skills",
    href: "skills",
    offset: -80
  },
];

export const Menu: React.FC = () => {
  return (
    <div>
      <S.Menu>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <S.NavLink
                  activeClass="active"
                  to={item.href}
                  smooth={true}
                  spy={true}
                  offset={item.offset}
                >
                  {item.title}
                </S.NavLink>
              </li>
            );
          })}
        </ul>
        <Button as={Link} to={"contacts"} smooth={true} offset={-90}>
          Contact
        </Button>
      </S.Menu>
    </div>
  );
};
