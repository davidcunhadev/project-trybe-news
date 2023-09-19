import { useContext } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './LatestNewsCard.module.css';
import NewsContext from '../../Context/NewsContext';
import { publicationDate } from '../../Helpers/TransformDate';

function LatestNewsCard() {
  const { newsResults, handleFavoriteNews, favorites } = useContext(NewsContext);

  const latestNews = newsResults[0];

  const getImage = () => {
    const imageLink = JSON.parse(latestNews.imagens);
    const url = `https://agenciadenoticias.ibge.gov.br/${imageLink.image_intro}`;
    return url;
  };

  return (
    latestNews && (
      <div className={ styles.container }>
        <div>
          <img
            className={ styles.mainImg }
            src={ getImage() }
            alt="Imagem notícia mais recente"
          />
        </div>
        <div className={ styles.details }>
          <p className={ styles.fresherNews }>Notícia Mais Recente</p>
          <button onClick={ () => handleFavoriteNews(latestNews) }>
            {favorites.some((fav) => fav.id === latestNews.id) ? (
              <MdFavorite />
            ) : (
              <MdFavoriteBorder />
            )}
          </button>
          <h1 className={ styles.title }>
            {latestNews.titulo}
          </h1>
          <p className={ styles.description }>
            {latestNews.introducao}
          </p>
          <p className={ styles.date }>{publicationDate(latestNews.data_publicacao)}</p>
          <Button href={ latestNews.link } />
        </div>
      </div>
    )
  );
}

export default LatestNewsCard;
