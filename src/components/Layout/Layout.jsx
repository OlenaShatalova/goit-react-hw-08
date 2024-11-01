import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import style from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={style.wrap}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
