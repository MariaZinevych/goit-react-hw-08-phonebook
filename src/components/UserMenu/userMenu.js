import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selector';
import { useSelector } from 'react-redux';

// Компонент UserMenu відповідає за меню користувача, якщо користувач авторизований
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome to Phonebook {user.name} </p>{' '}
      {/* Відображення привітання з ім'ям користувача */}
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>{' '}
      {/* Кнопка для виходу з облікового запису користувача */}
    </div>
  );
};
