import { CiLogout } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Container, BtnLogOut, UserTitle } from './UserMenu.styled';

export const UserMenu = () => {
  const { name } = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  return (
    <Container>
      <UserTitle>
        Welcome, <em>{name}</em>
      </UserTitle>
      <BtnLogOut
        aria-label="button logout"
        onClick={() => dispatch(logOut())}
        type="button"
      >
        <CiLogout size={24} color="rgb(39, 34, 124)" />
      </BtnLogOut>
    </Container>
  );
};
