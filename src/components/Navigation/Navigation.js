import { WrapContent, Logo, Link } from './Navigatio.styled';
import logo from '../../image/contacts.png';

export const Navigation = () => {
  return (
    <WrapContent>
      <Logo src={logo} alt="logo" />
      <Link to="/">PhoneBook</Link>
      <Link to="/contacts">Contacts</Link>
    </WrapContent>
  );
};
