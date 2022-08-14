import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { nanoid } from 'nanoid';
import { Box } from 'common/Box';
import ContactContainer from 'components/ContactContainer';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    // console.log('name: ', name, ' ; number: ', number);
    const normalizedName = name.trim();
    const existName = this.checkExistingName(normalizedName);
    if (existName) {
      alert(`${normalizedName} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: normalizedName,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  checkExistingName = newName => {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <GlobalStyle />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt={5}
        >
          <ContactContainer
            contacts={visibleContacts}
            onSubmit={this.addContact}
            onDeleteContact={this.deleteContact}
            onFilter={this.changeFilter}
          />
        </Box>
      </>
    );
  }
}
