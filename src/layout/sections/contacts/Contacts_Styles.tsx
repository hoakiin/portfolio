import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  position: relative;
  margin-bottom: 90px;

  @media ${theme.media.mobile} {
    margin-bottom: 80px;
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
    max-width: 400px;
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

export const S = {
  Contacts,
  StyledForm,
  Field,
};
