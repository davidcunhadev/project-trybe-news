import Button from '../Button/Button';
import styles from './MainCard.module.css';
import imgTest from '../../assets/imageTest.svg';
import favIcon from '../../assets/favIcon.svg';

function MainCard() {
  return (
    <div className={ styles.container }>
      <div>
        <img className={ styles.mainImg } src={ imgTest } alt="sasaw" />
      </div>
      <div className={ styles.details }>
        <p className={ styles.fresherNews }>Notícia Mais Recente</p>
        <img className={ styles.fav } src={ favIcon } alt="Favorite News" />
        <h1 className={ styles.title }>
          BGE: mais de 180 mil candidatos
          farão provas neste domingo, em todo o país
        </h1>
        <p className={ styles.description }>
          Processos seletivos receberam mais de 180 mil inscrições -
          A partir das 9h do próximo domingo, começam em todo o país as provas para
          Agente de Pesquisas e Mapeamento (APM) e Supervisor de Coleta
          e Qualidade (SCQ) do IBGE. Serão 181.610...
        </p>
        <p className={ styles.date }>1 dia atras</p>
        <Button />
      </div>
    </div>
  );
}

export default MainCard;
