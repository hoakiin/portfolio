import { S } from "./MobileMenu_Styles";
import React from "react";
import { useState } from "react";

const items = [
  {
    title: "Home",
    href: "main",
    offset: 0,
  },
  {
    title: "About",
    href: "about",
    offset: -80,
  },
  {
    title: "Background",
    href: "background",
    offset: -80,
  },
  {
    title: "Projects",
    href: "projects",
    offset: -60,
  },
  {
    title: "Skills",
    href: "skills",
    offset: -70,
  },
  {
    title: "Contact",
    href: "contacts",
    offset: -65,
  },
];

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <S.NavLink
                  onClick={() => {
                    setmenuIsOpen(false);
                  }}
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
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
