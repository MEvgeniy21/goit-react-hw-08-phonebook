import ContactContainer from 'components/ContactContainer';
import { Box } from 'common/Box';

export function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={5}
    >
      <ContactContainer />
    </Box>
  );
}
