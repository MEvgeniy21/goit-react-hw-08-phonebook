import Title from 'components/Title';
import Loader from 'components/Loader';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingLogIn } from 'redux/selectors';
import { authLogIn } from 'redux/authOperations';
import * as SC from './Auth.styled';

const Login = () => {
  const dispatch = useDispatch();
  const isLoadingLogIn = useSelector(selectIsLoadingLogIn);
  const INITIAL_VALUE = { email: '', password: '' };

  const handleSubmit = (val, actions) => {
    dispatch(authLogIn(val));
    actions.resetForm();
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
              <Field
                type="email"
                name="email"
                disabled={isLoadingLogIn}
                required
              />
            </SC.Label>
            <SC.Label>
              Password
              <Field
                type="password"
                name="password"
                disabled={isLoadingLogIn}
                required
              />
            </SC.Label>
            <SC.BtnSubmit type="submit" disabled={isLoadingLogIn}>
              {isLoadingLogIn && <Loader width={20} />}Login
            </SC.BtnSubmit>
          </SC.FormBlock>
        )}
      </Formik>
    </>
  );
};

export default Login;
