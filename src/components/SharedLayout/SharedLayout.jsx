import { Box } from 'common/Box';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import * as SC from './SharedLayout.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/phonebook', text: 'Phonebook' },
];

const SharedLayout = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <SC.Header>
        <SC.Nav>
          {navItems.map(({ href, text }) => (
            <SC.Link key={href} to={href}>
              {text}
            </SC.Link>
          ))}
        </SC.Nav>
      </SC.Header>
      <SC.Container>
        <Outlet />
      </SC.Container>
    </Box>
  );
};

export default SharedLayout;
