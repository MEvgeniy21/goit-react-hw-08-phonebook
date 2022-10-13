import * as SC from './AuthNav.styled';

const authItems = [
  { href: '/login', text: 'Login' },
  { href: '/registration', text: 'Registration' },
];

const AuthNav = () => {
  return (
    <SC.Wrap>
      {authItems.map(({ href, text }, index) => (
        <SC.Link key={index} to={href}>
          {text}
        </SC.Link>
      ))}
    </SC.Wrap>
  );
};

export default AuthNav;
