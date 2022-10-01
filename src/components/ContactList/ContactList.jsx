import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { selectFilterContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(selectFilterContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </List>
  );
}
