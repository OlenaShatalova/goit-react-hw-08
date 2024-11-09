import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { buildLinkClass } from '../../util/function';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
          {/* <NavLink className={buildLinkClass} to="/todos">
            Todo List
          </NavLink> */}
        </>
      )}
    </nav>
  );
};

export default Navigation;
