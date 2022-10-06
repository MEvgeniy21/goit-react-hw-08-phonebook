import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const useContacts = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilters);

  const normalizedFilter = filter.search.toLowerCase();

  if (!isLoading && !error) {
    const newData = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return { data: newData, error, isLoading };
  }

  return { data, error, isLoading };
};
