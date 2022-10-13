import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
// import { Box } from 'common/Box';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
// import { Suspense } from 'react';
import * as SC from './SharedLayout.styled';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SC.Container>
      <SC.Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* <AuthNav />
        <UserMenu /> */}
      </SC.Header>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </SC.Container>
  );
};

export default SharedLayout;
