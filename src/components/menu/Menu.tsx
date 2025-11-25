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
            <ul>
              <li>
                <S.Link href="#">Projects</S.Link>
              </li>
              <li>
                <Button as="a" href="#">
                  Contact
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </S.Menu>
    </div>
  );
};


