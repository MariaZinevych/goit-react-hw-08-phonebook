import { ContactList } from 'components/Contactlist/contactList';
import { Loader } from 'components/Loader/loader';
import { Name } from 'components/Name/name';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/tasks/operations';
import { getIsLoading } from 'redux/tasks/selector';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <Name /> {/* Компонент форми для додавання контакту */}
      <div>{isLoading && <Loader />}</div>{' '}
      {/* Відображення повідомлення про виконання запиту */}
      <ContactList /> {/* Компонент для відображення списку контактів */}
    </>
  );
}
