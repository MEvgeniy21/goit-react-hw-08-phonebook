import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import * as SC from './ContactContainer.styled';
import { Box } from 'common/Box';
import { useSelector } from 'react-redux';
import { selectIsLoadingGet } from 'redux/selectors';

export default function ContactContainer() {
  const isLoadingGet = useSelector(selectIsLoadingGet);

  return (
    <SC.Container>
      <SC.TitlePrimary>Phonebook</SC.TitlePrimary>
      <ContactForm />
      <SC.TitleSecondary>Contacts</SC.TitleSecondary>
      <Filter />

      {isLoadingGet && (
        <Box position="relative" width={1} height={100}>
          <Loader />
        </Box>
      )}

      {!isLoadingGet && <ContactList />}
    </SC.Container>
  );
}
