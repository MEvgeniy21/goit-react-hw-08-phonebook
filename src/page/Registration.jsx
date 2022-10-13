import Title from 'components/Title';
import { Formik, Field } from 'formik';
import * as SC from './Auth.styled';

const Registration = () => {
  const INITIAL_VALUE = { name: '', email: '', password: '' };

  const handleSubmit = (val, actions) => {
    console.log(val);
  };

  return (
    <>
      <Title mt={4} mb={5}>
        Registration page
      </Title>
      <Formik initialValues={INITIAL_VALUE} onSubmit={handleSubmit}>
        {props => (
          <SC.FormBlock>
            <SC.Label>
              Name
              <Field type="text" name="name" required />
            </SC.Label>
            <SC.Label>
              Email
              <Field type="email" name="email" required />
            </SC.Label>
            <SC.Label>
              Password
              <Field type="password" name="password" required />
            </SC.Label>
            <SC.BtnSubmit type="submit">Register</SC.BtnSubmit>
          </SC.FormBlock>
        )}
      </Formik>
    </>
  );
};

export default Registration;
