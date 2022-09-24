import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Box } from 'common/Box';
import { TitlePrimary, TitleSecondary } from './ContactContainer.styled';

export default function ContactContainer() {
  return (
    <Box display="flex" alignItems="start" flexDirection="column">
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm />
      <TitleSecondary>Contacts</TitleSecondary>
      <Filter />
      <ContactList />
    </Box>
  );
}
