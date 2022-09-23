import ContactContainer from 'components/ContactContainer';
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'common/Box';
import { useSearchParams } from 'react-router-dom';

export function Home() {
  const LS_KEY = 'contacts';

  const initialContacts = () => {
    const dataContactsFromLS = JSON.parse(localStorage.getItem(LS_KEY));

    if (dataContactsFromLS) {
      return dataContactsFromLS;
    }
    return [];
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get('filter') ?? '';

  const [contacts, setContacts] = useState(initialContacts);

  const [filter, setFilter] = useState(filterValue);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.trim();
    const existName = checkExistingName(normalizedName);
    if (existName) {
      alert(`${normalizedName} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: normalizedName,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };

  const checkExistingName = newName => {
    return contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);
    setSearchParams(value ? { filter: value } : {});
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={5}
    >
      <ContactContainer
        contacts={getVisibleContacts()}
        onSubmit={addContact}
        onDeleteContact={deleteContact}
        onFilter={changeFilter}
        filter={filter}
      />
    </Box>
  );
}
