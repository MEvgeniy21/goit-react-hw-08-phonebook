import ContactContainer from 'components/ContactContainer';
import { Box } from 'common/Box';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { toast } from 'react-toastify';

export function Home() {
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

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
