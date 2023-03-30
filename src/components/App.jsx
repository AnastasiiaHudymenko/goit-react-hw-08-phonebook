import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/Home';
import { RegisterPage } from '../pages/Register/Register';
import { LoginPage } from '../pages/Login/Login';
import { ContactsPage } from '../pages/Contacts/Contacts';

import { Layout } from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
