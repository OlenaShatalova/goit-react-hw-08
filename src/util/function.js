import clsx from 'clsx';
import css from '../components/Navigation/Navigation.module.css';

export const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
