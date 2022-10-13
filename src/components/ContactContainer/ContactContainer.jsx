import Title from 'components/Title';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import * as SC from './ContactContainer.styled';

export default function ContactContainer() {
  return (
    <SC.Container>
      <Title mb={5}>Phonebook</Title>
      <ContactForm />
      <SC.TitleSecondary>Contacts</SC.TitleSecondary>
      <Filter />
      <ContactList />
    </SC.Container>
  );
}
