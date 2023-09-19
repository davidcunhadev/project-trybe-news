import { useContext } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './Card.module.css';
import { CardProps } from '../../types';
import { publicationDate } from '../Helpers/TransformDate';
import NewsContext from '../../Context/NewsContext';

function Card({ news, handleFavoriteNews }: CardProps) {
  const { favorites } = useContext(NewsContext);
  return (
    <div className={ styles.container }>
      <h3>{news.titulo}</h3>
      <p className={ styles.description }>
        {news.introducao}
      </p>
      <p>{publicationDate(news.data_publicacao)}</p>
      <Button href={ news.link } />
      <button onClick={ () => handleFavoriteNews(news) }>
        {favorites.some((fav) => fav.id === news.id) ? (
          <MdFavorite />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </div>
  );
}

export default Card;
