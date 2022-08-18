import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { FormBlock, Label } from './ContactForm.styled';
import { Box } from 'common/Box';

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

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
