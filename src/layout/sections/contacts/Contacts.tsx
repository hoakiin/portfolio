import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
          <Field placeholder="Name" type="text" required />
          <Field placeholder="Email" type="email" required />
          <Field as="textarea" placeholder="Message" />
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  margin-bottom: 190px;

  @media ${theme.media.tablet} {
    margin-bottom: 120px;
  }
`;

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  textarea {
    resize: none;
    min-height: 165px;
  }

  @media ${theme.media.tablet} {
    max-width: 364px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.font};
  border-radius: 6px;
  padding: 16px 18px;

  color: ${theme.colors.font};
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    color: #8b93a0;
  }

  &:focus-visible {
    outline: 1px solid #a2bfcd;
  }
`;
