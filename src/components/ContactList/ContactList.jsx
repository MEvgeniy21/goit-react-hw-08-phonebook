import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import { Box } from 'common/Box';
import { List } from './ContactList.styled';
import { useContacts } from 'hooks/useContacts';

export default function ContactList() {
  const { data, error, isLoading } = useContacts();

  if (isLoading) {
    return (
      <Box position="relative" width={1} height={100}>
        <Loader />
      </Box>
    );
  }
  if (!isLoading && !error && data?.length) {
    return (
      <List>
        {data.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </List>
    );
  }
  if (!isLoading && !error && !data?.length) {
    return <div>Contacts not found</div>;
  }
  if (!isLoading && error) {
    return <div>Сontact getting error</div>;
  }
}
