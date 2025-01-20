import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
import Logo from '../Logo/Logo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors.js';
import { toggleTheme } from '../../redux/themeSlice.js';
import Icon from '../Icon/Icon.jsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={css.header}>
      <Logo />
      <nav className={css.navContainer}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
      <button onClick={handleTheme} className={css.themeButton}>
        <Icon id="switch" width={18} height={18} />
        <span>{theme === 'dark' ? 'Ligth' : 'Dark'}</span>
      </button>
    </header>
  );
}
