import * as SC from './Navigation.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/phonebook', text: 'Phonebook' },
];

const Navigation = () => {
  return (
    <SC.Nav>
      {navItems.map(({ href, text }, index) => (
        <SC.Link key={index} to={href}>
          {text}
        </SC.Link>
      ))}
      {/* <SC.Link to="/">Home</SC.Link>
          <SC.Link to="/phonebook">Phonebook</SC.Link> */}
    </SC.Nav>
  );
};

export default Navigation;
