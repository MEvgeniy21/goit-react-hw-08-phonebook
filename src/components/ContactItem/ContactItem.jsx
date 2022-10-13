import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import EditForm from 'components/EditForm';
import { Box } from 'common/Box';
import { toast } from 'react-toastify';
import * as SC from './ContactItem.styled';
import { useState } from 'react';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsSlice';

export default function ContactItem({ id, name, number }) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteContact, { isLoading: isLoadingDel }] =
    useDeleteContactMutation();
  const [updateContact, { isLoading: isLoadingEdit }] =
    useUpdateContactMutation();

  const handleDelete = async () => {
    try {
      const { error } = await deleteContact(id);
      if (error) {
        toast.error(`Contact deletion error`);
      } else {
        toast.success(`contact - "${name}: ${number}" has been deleted`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  if (!isEdit) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="start"
        gridGap={3}
      >
        <span>{name}:</span>
        <span>{number}</span>
        <SC.Button
          type="button"
          width={50}
          height={25}
          onClick={handleEdit}
          disabled={isLoadingEdit}
        >
          {isLoadingEdit && <Loader width={20} />}
          edit
        </SC.Button>
        <SC.Button
          type="button"
          width={70}
          height={25}
          onClick={handleDelete}
          disabled={isLoadingDel}
        >
          {isLoadingDel && <Loader width={20} />}
          delete
        </SC.Button>
      </Box>
    );
  }
  if (isEdit) {
    return (
      <EditForm
        id={id}
        name={name}
        number={number}
        onEdit={setIsEdit}
        isLoadingEdit={isLoadingEdit}
        updateContact={updateContact}
      />
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
