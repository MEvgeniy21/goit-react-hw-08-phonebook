import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authLogOut } from 'redux/authOperations';
import * as SC from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleOnClick = () => {
    dispatch(authLogOut());
  };
  return (
    <SC.Wrap>
      <SC.Text>
        Welcom <SC.User>{user.name}</SC.User>
      </SC.Text>
      <SC.Button type="button" onClick={handleOnClick}>
        exit
      </SC.Button>
    </SC.Wrap>
  );
};

export default UserMenu;
