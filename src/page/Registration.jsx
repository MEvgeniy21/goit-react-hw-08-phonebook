import Title from 'components/Title';
import Loader from 'components/Loader';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingRegister } from 'redux/selectors';
import { authRegister } from 'redux/authOperations';
import * as SC from './Auth.styled';

const Registration = () => {
  const dispatch = useDispatch();
  const isLoadingRegister = useSelector(selectIsLoadingRegister);
  const INITIAL_VALUE = { name: '', email: '', password: '' };

  const handleSubmit = (val, actions) => {
    const { name, email, password } = val;
    const normName = name.trim();
    dispatch(authRegister({ name: normName, email, password }));
    actions.resetForm();
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
              <Field
                type="text"
                name="name"
                disabled={isLoadingRegister}
                required
              />
            </SC.Label>
            <SC.Label>
              Email
              <Field
                type="email"
                name="email"
                disabled={isLoadingRegister}
                required
              />
            </SC.Label>
            <SC.Label>
              Password
              <Field
                type="password"
                name="password"
                disabled={isLoadingRegister}
                required
              />
            </SC.Label>
            <SC.BtnSubmit type="submit" disabled={isLoadingRegister}>
              {isLoadingRegister && <Loader width={20} />}Register
            </SC.BtnSubmit>
          </SC.FormBlock>
        )}
      </Formik>
    </>
  );
};

export default Registration;
