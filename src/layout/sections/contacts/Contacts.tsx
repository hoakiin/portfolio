import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <StyledForm>
        <Field placeholder="Name" />
        <Field placeholder="Email" />
        <Field as="textarea" placeholder="Message" />
        <Button type="submit">Submit</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Field = styled.input``;
