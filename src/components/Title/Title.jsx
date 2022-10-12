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
