import { useSelector } from 'react-redux';
import { getContacts, getFilters } from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const normalizedFilter = filter.search.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
