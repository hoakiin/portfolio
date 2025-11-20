import styled from "styled-components";

type ItemPropsType = {
  years: string;
  name: string;
  text: string;
};

export const Item = ({ years, name, text }: ItemPropsType) => {
  return (
    <div>
      <Years>{years}</Years>
      <Name>{name}</Name>
      <Text>{text}</Text>
    </div>
  );
};

const Years = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 14px 0 14px 0;
`;

const Text = styled.p`
  max-width: 420px;
  font-size: 15px;
`;
