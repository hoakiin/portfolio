import { S } from "./MobileMenu_Styles";
import React from "react";
import { useState } from "react";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen) }

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ ()=>{setmenuIsOpen(false)}}>
        <ul>
          <li>
            <S.Link href="#">Home</S.Link>
          </li>
          <li>
            <S.Link href="#">About</S.Link>
          </li>
          <li>
            <S.Link href="#">Projects</S.Link>
          </li>
          <li>
            <S.Link href="#">Skills</S.Link>
          </li>
          <li>
            <S.Link href="#">Contact</S.Link>
          </li>
        </ul>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
