import { S } from "./MobileMenu_Styles";

export const MobileMenu: React.FC = () => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={false}>
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
