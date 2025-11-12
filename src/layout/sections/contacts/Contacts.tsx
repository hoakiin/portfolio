import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
          <Field placeholder="Name" />
          <Field placeholder="Email" />
          <Field as="textarea" placeholder="Message" />
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Container>
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
