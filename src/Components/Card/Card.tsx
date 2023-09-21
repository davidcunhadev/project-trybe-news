import { useContext } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './Card.module.css';
import { CardProps } from '../../types';
import { publicationDate } from '../../Helpers/TransformDate';
import NewsContext from '../../Context/NewsContext';

function Card({ news, handleFavoriteNews }: CardProps) {
  const { favorites } = useContext(NewsContext);
  return (
    <article className={ styles.container }>
      <h3>{news.titulo}</h3>
      <p className={ styles.description }>
        {news.introducao}
      </p>
      <div className={ styles.date }>
        <p>{publicationDate(news.data_publicacao)}</p>
        <Button href={ news.link } />
      </div>
      <button onClick={ () => handleFavoriteNews(news) }>
        {favorites && favorites.some((fav) => fav.id === news.id) ? (
          <MdFavorite />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </article>
  );
}

export default Card;
