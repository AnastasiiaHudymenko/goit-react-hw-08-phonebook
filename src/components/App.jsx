import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/Home';
import { RegisterPage } from '../pages/Register/Register';
import { LoginPage } from '../pages/Login/Login';
import {
  Container,
  Header,
  Link,
  WrapContent,
  Logo,
  Title,
} from './App.styled';
import logo from '../image/contacts.png';
export const App = () => {
  return (
    <Container>
      <Header>
        <WrapContent>
          <Logo width={60} height={60} src={logo} alt="" />
          <Title>PhoneBook</Title>
        </WrapContent>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Container>
  );
};
