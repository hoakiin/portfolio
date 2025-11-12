import styled from "styled-components";

export const Tags = (props: { tagsItems: Array<string> }) => {
  return (
    <StyledTags>
      <ul>
        {props.tagsItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </StyledTags>
  );
};

const StyledTags = styled.div`
  ul {
    display: flex;
    gap: 30px;
  }
`;
