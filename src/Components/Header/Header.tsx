import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className={ styles.header }>
      <a href="/">
        <img className={ styles.logo } src={ logo } alt="Trybe Logo" />
      </a>
      <h1>TRYBE NEWS</h1>
    </header>
  );
}

export default Header;
