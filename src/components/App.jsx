import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { HomePage } from '../pages/Home';
import { RegisterPage } from '../pages/Register';
import { LoginPage } from '../pages/Login';
import { ContactsPage } from '../pages/Contacts';
import { PrivateRoute } from './PrivateRouter';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(state => state.auth);

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
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
