import styled from "styled-components";

export const Menu = () => {
  return (
    <div>
      <StyledMenu>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
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
    & ul {
      gap: 20px;
    }
  }
`;
