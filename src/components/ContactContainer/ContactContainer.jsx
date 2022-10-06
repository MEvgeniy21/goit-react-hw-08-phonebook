import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import * as SC from './ContactContainer.styled';

export default function ContactContainer() {
  return (
    <SC.Container>
      <SC.TitlePrimary>Phonebook</SC.TitlePrimary>
      <ContactForm />
      <SC.TitleSecondary>Contacts</SC.TitleSecondary>
      <Filter />
      <ContactList />
    </SC.Container>
  );
}
