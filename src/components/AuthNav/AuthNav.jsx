import { NavLink } from 'react-router-dom';
import { buildLinkClass } from '../../util/function';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
