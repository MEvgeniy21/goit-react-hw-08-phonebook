import InputField from 'components/InputField';
import ButtonSubmit from 'components/ButtonSubmit';
import Loader from 'components/Loader';
import { Formik } from 'formik';
import { schema } from 'common/schema';
import * as SC from './ContactForm.styled';
import { Box } from 'common/Box';
import { useCheckExistingName } from 'hooks';
import { nanoid } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useAddContactMutation } from 'redux/contactsSlice';

export default function ContactForm() {
  const INITIAL_VALUE = { name: '', number: '' };
  const [addContact, { isLoading }] = useAddContactMutation();
  const checkExistingName = useCheckExistingName();
  const nameID = useRef(nanoid());
  const numberID = useRef(nanoid());

  const handleSubmit = async (val, actions) => {
    const { name, number } = val;
    const newName = name.trim();
    const existName = checkExistingName(newName);
    if (existName) {
      toast.warning(`${newName} is already in contacts`);
      return;
    }
    try {
      const { error } = await addContact({ name: newName, number });
      if (error) {
        toast.error(`Contact creation error`);
      } else {
        toast.success(`contact - "${newName}: ${number}" has been added`);
      }
    } catch (error) {
      console.log(error);
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {props => (
        <SC.FormBlock autoComplete="off">
          <SC.Label htmlFor={nameID}>
            Name
            <InputField
              type="text"
              name="name"
              id={nameID}
              disabled={isLoading}
              onBlur={props.handleBlur}
              required
            />
          </SC.Label>

          <SC.Label htmlFor={numberID}>
            Number
            <InputField
              type="tel"
              name="number"
              id={numberID}
              disabled={isLoading}
              onBlur={props.handleBlur}
              required
            />
          </SC.Label>

          <Box display="flex" alignItems="center" justifyContent="center">
            <ButtonSubmit
              validateForm={props.validateForm}
              width={100}
              height={25}
              disabled={isLoading}
            >
              {isLoading && <Loader width={20} />}
              Add contact
            </ButtonSubmit>
          </Box>
        </SC.FormBlock>
      )}
    </Formik>
  );
}
