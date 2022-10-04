import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import EditForm from 'components/EditForm';
import { Box } from 'common/Box';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingDel, selectLoadingEdit } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import * as SC from './ContactItem.styled';
import { useState } from 'react';

export default function ContactItem({ id, name, number }) {
  const [isEdit, setIsEdit] = useState(false);
  const isLoadingDel = useSelector(selectLoadingDel).includes(id);
  const isLoadingEdit = useSelector(selectLoadingEdit).includes(id);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    setIsEdit(prev => !prev);
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
        onClose={handleEdit}
        isLoadingEdit={isLoadingEdit}
      />
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
