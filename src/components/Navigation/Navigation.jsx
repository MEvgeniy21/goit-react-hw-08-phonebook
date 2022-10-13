import { useAuth } from 'hooks';
import * as SC from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SC.Nav>
      <SC.Link to="/" end>
        Home
      </SC.Link>
      {isLoggedIn && <SC.Link to="/phonebook">Phonebook</SC.Link>}
    </SC.Nav>
  );
};

export default Navigation;
