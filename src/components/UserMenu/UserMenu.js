import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const { name } = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  return (
    <div>
      <span>Welcome, {name}</span>
      <button onClick={() => dispatch(logOut())} type="button">
        Logout
      </button>
    </div>
  );
};
