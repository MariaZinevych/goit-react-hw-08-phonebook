import { Name } from './Name/name';

import { GlobalStyle } from 'Global.styled';
import { ContactList } from './Contactlist/contactList';
import { Filter } from './Filter/filter';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchContacts } from 'redux/tasks/operations';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';
import { RestrictedRoute } from './UserMenu/RestrictedRoute';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { useAuth } from './hooks';
import { Layout } from './layout/layout';

const HomePage = lazy(() => import('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/login'));
const TasksPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
