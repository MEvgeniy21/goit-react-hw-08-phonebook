import PropTypes from 'prop-types';
import InputField from 'components/InputField';
import ButtonSubmit from 'components/ButtonSubmit';
import Loader from 'components/Loader';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Formik } from 'formik';
import { schema } from 'common/schema';
import * as SC from './EditForm.styled';
import { Box } from 'common/Box';
import { nanoid } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const EditForm = ({
  id,
  name,
  number,
  onEdit,
  isLoadingEdit,
  updateContact,
}) => {
  const INITIAL_VALUE = { name, number };
  const nameID = useRef(nanoid());
  const numberID = useRef(nanoid());

  const onClose = () => {
    onEdit(false);
  };

  const handleSubmit = async (val, actions) => {
    const newName = val.name.trim();
    if (newName === name && val.number === number) {
      onClose();
      return;
    }
    try {
      const { error } = await updateContact({
        id,
        name: newName,
        number: val.number,
      });
      if (error) {
        toast.error(`Contact editing error`);
      } else {
        toast.success(`contact - "${newName}: ${val.number}" has been edited`);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
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
  onEdit: PropTypes.func.isRequired,
  isLoadingEdit: PropTypes.bool.isRequired,
  updateContact: PropTypes.func.isRequired,
};

export default EditForm;
