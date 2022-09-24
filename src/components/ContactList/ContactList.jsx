import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { useContacts } from 'hooks/useContacts';

export default function ContactList() {
  const contacts = useContacts();

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
