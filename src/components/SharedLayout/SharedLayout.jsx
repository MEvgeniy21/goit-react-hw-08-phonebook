import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Suspense } from 'react';
import * as SC from './SharedLayout.styled';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SC.Container>
      <SC.Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </SC.Header>
      <SC.Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </SC.Main>
    </SC.Container>
  );
};

export default SharedLayout;
