import { useSelector } from 'react-redux';
import { WrapContent, Logo, Link } from './Navigatio.styled';
import logo from '../../image/contacts.png';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <WrapContent>
      <Logo src={logo} alt="logo" />
      <Link to="/">PhoneBook</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </WrapContent>
  );
};
