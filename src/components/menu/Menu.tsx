import { Button } from "../Button";
import { S } from "./Menu__Styles";

export const Menu: React.FC = () => {
  return (
    <div>
      <S.Menu>
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
        </ul>
        <Button as="a" href="#">
          Contact
        </Button>
      </S.Menu>
    </div>
  );
};
