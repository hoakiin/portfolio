import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <S.StyledForm>
          <S.Field placeholder="Name" type="text" required />
          <S.Field placeholder="Email" type="email" required />
          <S.Field as="textarea" placeholder="Message" />
          <Button type="submit">Submit</Button>
        </S.StyledForm>
      </Container>
    </S.Contacts>
  );
};
