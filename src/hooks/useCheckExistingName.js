import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const useCheckExistingName = () => {
  const contacts = useSelector(selectContacts);

  return newName =>
    Boolean(
      contacts.find(
        contact => contact.name.toLowerCase() === newName.toLowerCase()
      )
    );
};
