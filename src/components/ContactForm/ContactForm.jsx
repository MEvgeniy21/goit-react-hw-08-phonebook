import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { FormBlock, Label } from './ContactForm.styled';
import { Box } from 'common/Box';

const INITIAL_VALUE = { name: '', number: '' };

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
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
      <FormBlock autoComplete="off">
        <Label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="p" />
        </Label>
        <Label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="p" />
        </Label>
        <Box display="flex" alignItems="center" justifyContent="center">
          <button type="submit">Add contact</button>
        </Box>
      </FormBlock>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
