import PropTypes from 'prop-types';
import { Box } from 'common/Box';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="start" gridGap={3}>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        delete
      </button>
    </Box>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
