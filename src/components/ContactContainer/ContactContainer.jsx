import PropTypes from 'prop-types';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Box } from 'common/Box';
import { TitlePrimary, TitleSecondary } from './ContactContainer.styled';

export default function ContactContainer({
  contacts,
  onSubmit,
  onDeleteContact,
  onFilter,
}) {
  return (
    <Box display="flex" alignItems="start" flexDirection="column">
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm onSubmit={onSubmit} />
      <TitleSecondary>Contacts</TitleSecondary>
      <Filter onFilter={onFilter} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </Box>
  );
}

ContactContainer.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};
