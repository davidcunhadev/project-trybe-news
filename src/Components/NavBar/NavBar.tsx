import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={ styles.container }>
      <NavLink to="/">
        Mais Recentes
      </NavLink>
      <NavLink to="/release">
        Release
      </NavLink>
      <NavLink to="/news">
        Noticias
      </NavLink>
      <NavLink to="/favorites">
        Favoritas
      </NavLink>
    </nav>
  );
}

export default NavBar;
