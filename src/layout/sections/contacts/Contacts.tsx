import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from "react";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_8iayvhx', 'template_dtl2lzi', form.current, {
        publicKey: 'eZ1Vv8E9n_vMJy715',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
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
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
