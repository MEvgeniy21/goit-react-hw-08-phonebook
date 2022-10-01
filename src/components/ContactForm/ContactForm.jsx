import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { FormBlock, Label } from './ContactForm.styled';
import { Box } from 'common/Box';
import { useDispatch } from 'react-redux';
// import { addContacts } from 'redux/contactsSlice';
import { useCheckExistingName } from 'hooks';
import { addContacts } from 'redux/operations';

const INITIAL_VALUE = { name: '', number: '' };

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .min(5)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const checkExistingName = useCheckExistingName();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const newName = name.trim();
    const existName = checkExistingName(newName);
    if (existName) {
      alert(`${newName} is already in contacts`);
      return;
    }
    dispatch(addContacts({ name: newName, phone: number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {props => (
        <FormBlock autoComplete="off">
          <Label htmlFor="name">
            Name
            <Field type="text" name="name" id="name" required />
          </Label>
          <ErrorMessage name="name" component="p" />

          <Label htmlFor="number">
            Number
            <Field type="tel" name="number" id="number" required />
          </Label>
          <ErrorMessage name="number" component="p" />

          <Box display="flex" alignItems="center" justifyContent="center">
            <button type="submit">Add contact</button>
          </Box>
        </FormBlock>
      )}
    </Formik>
  );
}
