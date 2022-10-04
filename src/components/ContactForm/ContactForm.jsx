import InputField from 'components/InputField';
import ButtonSubmit from 'components/ButtonSubmit';
import Loader from 'components/Loader';
import { Formik } from 'formik';
import { schema } from 'common/schema';
import * as SC from './ContactForm.styled';
import { Box } from 'common/Box';
import { addContact } from 'redux/operations';
import { useCheckExistingName } from 'hooks';
import { nanoid } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingAdd } from 'redux/selectors';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const INITIAL_VALUE = { name: '', number: '' };
  const isLoadingAdd = useSelector(selectIsLoadingAdd);
  const dispatch = useDispatch();
  const checkExistingName = useCheckExistingName();
  const nameID = useRef(nanoid());
  const numberID = useRef(nanoid());

  const handleSubmit = (val, actions) => {
    const { name, number } = val;
    const newName = name.trim();
    const existName = checkExistingName(newName);
    if (existName) {
      toast.warning(`${newName} is already in contacts`);
      return;
    }
    dispatch(addContact({ name: newName, phone: number }));
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
              disabled={isLoadingAdd}
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
              disabled={isLoadingAdd}
              onBlur={props.handleBlur}
              required
            />
          </SC.Label>

          <Box display="flex" alignItems="center" justifyContent="center">
            <ButtonSubmit
              validateForm={props.validateForm}
              width={100}
              height={25}
              disabled={isLoadingAdd}
            >
              {isLoadingAdd && <Loader width={20} />}
              Add contact
            </ButtonSubmit>
          </Box>
        </SC.FormBlock>
      )}
    </Formik>
  );
}
