import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/Home';
import { RegisterPage } from '../pages/Register/Register';
import { LoginPage } from '../pages/Login/Login';
import { Container } from './App.styled';
import { Layout } from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Container>
  );
};
