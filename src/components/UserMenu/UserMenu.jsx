import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <Button
        onClick={() => dispatch(logout())}
        style={{ backgroundColor: 'rgb(158, 202, 248)' }}
        type="button"
        variant="outlined"
      >
        LogOut{' '}
      </Button>
    </div>
  );
};

export default UserMenu;
