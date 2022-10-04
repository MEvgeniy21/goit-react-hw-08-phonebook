import PropTypes from 'prop-types';
import InputField from 'components/InputField';
import ButtonSubmit from 'components/ButtonSubmit';
import Loader from 'components/Loader';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Formik } from 'formik';
import { schema } from 'common/schema';
import * as SC from './EditForm.styled';
import { Box } from 'common/Box';
import { editContact } from 'redux/operations';
import { usePreviousValue } from 'hooks';
import { nanoid } from '@reduxjs/toolkit';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const EditForm = ({ id, name, number, onClose, isLoadingEdit }) => {
  const INITIAL_VALUE = { name, number };
  const dispatch = useDispatch();
  const nameID = useRef(nanoid());
  const numberID = useRef(nanoid());
  const prevIsLoadingEdit = usePreviousValue(isLoadingEdit);

  useEffect(() => {
    if (prevIsLoadingEdit && !isLoadingEdit) {
      onClose();
    }
  }, [isLoadingEdit, onClose, prevIsLoadingEdit]);

  const handleSubmit = (val, actions) => {
    const newName = val.name.trim();
    if (newName === name && val.number === number) {
      onClose();
      return;
    }
    dispatch(editContact({ id, name: newName, phone: val.number }));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {props => (
        <SC.FormBlock autoComplete="off">
          <Box width={1}>
            <Box display="flex" alignItems="center" mb={2}>
              <SC.Label htmlFor={nameID}>Name</SC.Label>
              <InputField
                type="text"
                name="name"
                id={nameID}
                disabled={isLoadingEdit}
                onBlur={props.handleBlur}
                required
              />
            </Box>
            <Box display="flex" alignItems="center">
              <SC.Label htmlFor={numberID}>Number</SC.Label>
              <InputField
                type="tel"
                name="number"
                id={numberID}
                disabled={isLoadingEdit}
                onBlur={props.handleBlur}
                required
              />
            </Box>
          </Box>
          <Box
            width={50}
            display="flex"
            flexDirection="column"
            alignItems="end"
            justifyContent="space-between"
          >
            <SC.Button type="button" onClick={onClose}>
              <AiFillCloseCircle />
            </SC.Button>
            <ButtonSubmit
              validateForm={props.validateForm}
              position="relative"
              width={50}
              height={25}
              disabled={isLoadingEdit}
            >
              {isLoadingEdit && <Loader width={20} />}
              edit
            </ButtonSubmit>
          </Box>
        </SC.FormBlock>
      )}
    </Formik>
  );
};

EditForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoadingEdit: PropTypes.bool.isRequired,
};

export default EditForm;
