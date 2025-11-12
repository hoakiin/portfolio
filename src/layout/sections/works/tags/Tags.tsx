import styled from "styled-components";

export const Tags = (props: { tagsItems: Array<string> }) => {
  return (
    <StyledTags>
      {props.tagsItems.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </StyledTags>
  );
};

const StyledTags = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
