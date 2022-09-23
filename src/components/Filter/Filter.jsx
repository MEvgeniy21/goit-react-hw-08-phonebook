import PropTypes from 'prop-types';
import { Box } from 'common/Box';

export default function Filter({ onFilter, filter }) {
  return (
    <Box display="flex" flexDirection="column" gridGap={2} mb={4}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={onFilter}
        defaultValue={filter}
      />
    </Box>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
