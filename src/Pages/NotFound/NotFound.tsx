import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={ styles.container }>
      <h1>Oops!</h1>
      <h3>A página que você está procurando não foi encontrada.</h3>
    </div>
  );
}

export default NotFound;
