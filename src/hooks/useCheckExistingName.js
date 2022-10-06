import { useGetContactsQuery } from 'redux/contactsSlice';

export const useCheckExistingName = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  if (!isLoading && !error) {
    return newName =>
      Boolean(
        data.find(
          contact => contact.name.toLowerCase() === newName.toLowerCase()
        )
      );
  }
  return false;
};
