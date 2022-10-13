import Title from 'components/Title';
import { Formik, Field } from 'formik';
import * as SC from './Auth.styled';

const Login = () => {
  const INITIAL_VALUE = { email: '', password: '' };

  const handleSubmit = (val, actions) => {
    console.log(val);
  };

  return (
    <>
      <Title mt={4} mb={5}>
        Login page
      </Title>
      <Formik initialValues={INITIAL_VALUE} onSubmit={handleSubmit}>
        {props => (
          <SC.FormBlock>
            <SC.Label>
              Email
              <Field type="email" name="email" required />
            </SC.Label>
            <SC.Label>
              Password
              <Field type="password" name="password" required />
            </SC.Label>
            <SC.BtnSubmit type="submit">Login</SC.BtnSubmit>
          </SC.FormBlock>
        )}
      </Formik>
    </>
  );
};

export default Login;
