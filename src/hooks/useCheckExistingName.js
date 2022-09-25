import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const useCheckExistingName = () => {
  const { contacts } = useSelector(getContacts);

  return newName =>
    Boolean(
      contacts.find(
        contact => contact.name.toLowerCase() === newName.toLowerCase()
      )
    );
};
