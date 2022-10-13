import * as SC from './UserMenu.styled';

const UserMenu = () => {
  return (
    <SC.Wrap>
      <SC.Text>
        Welcom <SC.User>User</SC.User>
      </SC.Text>
      <SC.Button type="button">exit</SC.Button>
    </SC.Wrap>
  );
};

export default UserMenu;
