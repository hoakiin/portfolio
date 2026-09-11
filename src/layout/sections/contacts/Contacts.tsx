import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';
import { ElementRef, FormEvent, useRef, useState } from "react";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_fhza7ga', 'template_dtl2lzi', form.current, {
        publicKey: 'eZ1Vv8E9n_vMJy715',
      })
      .then(
        () => {
          setStatus("success");
          e.currentTarget.reset();
        },
        () => {
          setStatus("error");
        },
      );
  };

  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field placeholder="Name" type="text" required name={"name"} />
          <S.Field placeholder="Email" type="email" required name={"email"} />
          <S.Field placeholder="Subject" type="text" required name={"subject"} />
          <S.Field as="textarea" placeholder="Message" required name={"message"} />
          <Button type="submit">Submit</Button>
          <S.StatusWrapper>
            {status === "success" && (
              <S.StatusMessage role="status">Message sent</S.StatusMessage>
            )}
            {status === "error" && (
              <S.StatusMessage error role="alert">
                Failed to send. Please try again.
              </S.StatusMessage>
            )}
          </S.StatusWrapper>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
