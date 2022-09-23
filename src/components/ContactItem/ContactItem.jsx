import PropTypes from 'prop-types';
import { Box } from 'common/Box';
import { deleteContacts } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Box display="flex" alignItems="center" justifyContent="start" gridGap={3}>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </Box>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
