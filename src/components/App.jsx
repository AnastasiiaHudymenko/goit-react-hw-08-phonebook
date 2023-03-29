import { Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { RegisterPage } from '../pages/Register';
import { LoginPage } from '../pages/Login';
import logo from '../image/contacts.png';
export const App = () => {
  return (
    <div>
      <header>
        <img width={60} height={60} src={logo} alt="" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
