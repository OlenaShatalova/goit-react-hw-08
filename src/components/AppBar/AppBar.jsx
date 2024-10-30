import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  return (
    <>
      <Navigation />
      <AuthNav />
      <UserMenu />
      AppBar
    </>
  );
};

export default AppBar;
