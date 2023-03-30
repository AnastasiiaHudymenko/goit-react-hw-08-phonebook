import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AutNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header, Container } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Header>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};
