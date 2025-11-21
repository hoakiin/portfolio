import styled from "styled-components";
import { Button } from "../Button";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const Menu = () => {
  return (
    <div>
      <StyledMenu>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <ul>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Button as="a" href="#">
                  Contact
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    @media ${theme.media.tablet} {
      ${font({ Fmax: 16, Fmin: 13 })};
    }

    & ul {
      gap: 87px;

      @media ${theme.media.tablet} {
        gap: 30px;
      }
    }
  }
`;

const Link = styled.a`
  color: ${theme.colors.font};
  display: inline-block;
  position: relative;
  transition: all 0.4s ease;

  &:hover {
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateY(-1px);
  }
`;
