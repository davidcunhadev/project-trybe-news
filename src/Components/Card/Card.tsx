import Button from '../Button/Button';
import styles from './Card.module.css';
import favIcon from '../../assets/favIcon.svg';

function Card() {
  return (
    <div className={ styles.container }>
      <h3>Taxa de sindicalização cai a 9,2% em 2022, menor nível da série</h3>
      <p className={ styles.description }>
        Em 2022, menos de 10% dos trabalhadores eram sindicalizados, chegando ao menor
        contingente da série iniciada em 2012 - Foto: Rovena Rosa/Agência Brasil Em 2022,
        das 99,6 milhões de pessoas ocupadas, 9,2% (9,1 milhões de pessoas) eram associada
      </p>
      <p>1 dia atrás</p>
      <Button />
      <img src={ favIcon } alt="Favorite News" />
    </div>
  );
}

export default Card;
