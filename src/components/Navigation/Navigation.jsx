import { useAuth } from 'hooks';
import * as SC from './Navigation.styled';

// const navItems = [
//   { href: '/', text: 'Home' },
//   { href: '/phonebook', text: 'Phonebook' },
// ];

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SC.Nav>
      {/* {navItems.map(({ href, text }, index) => (
        <SC.Link key={index} to={href}>
          {text}
        </SC.Link>
      ))} */}
      <SC.Link to="/">Home</SC.Link>
      {isLoggedIn && <SC.Link to="/phonebook">Phonebook</SC.Link>}
    </SC.Nav>
  );
};

export default Navigation;
