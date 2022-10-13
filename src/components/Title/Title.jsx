import PropTypes from 'prop-types';
import { Box } from 'common/Box';
import * as SC from './Title.styled';

const Title = ({ children, pt = 0, pb = 0, mt = 0, mb = 0 }) => {
  return (
    <Box pt={pt} pb={pb} mt={mt} mb={mb}>
      <SC.Title>{children}</SC.Title>
    </Box>
  );
};

export default Title;

Title.propTypes = {
  children: PropTypes.any.isRequired,
  pt: PropTypes.number,
  pb: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
};
