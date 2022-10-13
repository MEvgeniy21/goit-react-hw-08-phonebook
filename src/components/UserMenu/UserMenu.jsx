import Loader from 'components/Loader';
import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingLogOut } from 'redux/selectors';
import { authLogOut } from 'redux/authOperations';
import * as SC from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoadingLogOut = useSelector(selectIsLoadingLogOut);
  const { user } = useAuth();

  const handleOnClick = () => {
    dispatch(authLogOut());
  };
  return (
    <SC.Wrap>
      <SC.Text>
        Welcom <SC.User>{user.name}</SC.User>
      </SC.Text>
      <SC.Button
        type="button"
        onClick={handleOnClick}
        disabled={isLoadingLogOut}
      >
        {isLoadingLogOut && <Loader width={20} />}
        exit
      </SC.Button>
    </SC.Wrap>
  );
};

export default UserMenu;
