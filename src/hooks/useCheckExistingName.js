import { useSelector } from 'react-redux';
import { selectItems } from 'redux/selectors';

export const useCheckExistingName = () => {
  const { contacts } = useSelector(selectItems);

  return newName =>
    Boolean(
      contacts.find(
        contact => contact.name.toLowerCase() === newName.toLowerCase()
      )
    );
};
