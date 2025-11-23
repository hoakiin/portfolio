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
  margin: 15px 0 18px 0;
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;

  li {
    white-space: nowrap;

    border: 1px solid transparent;
    border-radius: 4px;

    background-image: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%),
      linear-gradient(#262435, #262435),
      linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);

    background-clip: text, padding-box, border-box;

    -webkit-background-clip: text, padding-box, border-box;

    color: transparent;
    -webkit-text-fill-color: transparent;

    font-size: 11px;
    letter-spacing: 1.2px;
    padding: 7px 16px;
  }
`;
