import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  position: relative;
  margin-bottom: 90px;

  @media ${theme.media.mobile} {
    margin-bottom: 80px;
  }
`;

const Form = styled.form`
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
  font-size: 16px;
  background-color: ${theme.colors.primaryBg};

  color: ${theme.colors.font};
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    color: #8b93a0;
  }

  &:focus-visible {
    outline: 1px solid #a2bfcd;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${theme.colors.font};
    -webkit-box-shadow: 0 0 0 1000px ${theme.colors.primaryBg} inset;
    transition: background-color 9999s ease-in-out 0s;
  }
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
`;

const StatusMessage = styled.p<{ error?: boolean }>`
  color: ${({ error }) => (error ? "#ff6b6b" : "#6bc47f")};
  text-align: center;
`;

export const S = {
  Contacts,
  Form,
  Field,
  StatusWrapper,
  StatusMessage,
};
