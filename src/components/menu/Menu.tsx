import styled from "styled-components";

export const Menu = () => {
  return (
    <div>
      <StyledMenu>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <div>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
        </ul>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        gap: 100px;
    }
  }
`;
