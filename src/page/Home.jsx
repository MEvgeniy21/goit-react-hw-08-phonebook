import Title from 'components/Title';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <Title mt={4}>
      Phone contact book{' '}
      {!isLoggedIn && (
        <span>
          , please <Link to="/login">login</Link> or{' '}
          <Link to="/registration">register</Link> to use
        </span>
      )}
    </Title>
  );
}
