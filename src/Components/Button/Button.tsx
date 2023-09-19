import styles from './Button.module.css';

type ButtonProps = {
  href: string
};

function Button({ href }:ButtonProps) {
  return (
    <button className={ styles.button }>
      <a target="_blank" href={ href } rel="noreferrer">Leia a notícia aqui</a>
    </button>
  );
}

export default Button;
