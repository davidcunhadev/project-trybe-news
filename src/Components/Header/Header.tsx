import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className={ styles.header }>
      <img className={ styles.logo } src={ logo } alt="Trybe Logo" />
      <h1>TRYBE NEWS</h1>
    </header>
  );
}

export default Header;
