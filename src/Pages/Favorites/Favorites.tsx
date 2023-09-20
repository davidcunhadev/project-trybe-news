import { useContext } from 'react';
import NewsContext from '../../Context/NewsContext';

import styles from './Favorites.module.css';

import Card from '../../Components/Card/Card';

function Favorites() {
  const { favorites, handleFavoriteNews } = useContext(NewsContext);

  return (
    <section className={ styles.container }>
      {favorites.length === 0 ? (
        <p className={ styles.noFavorites }>Nenhuma notícia favoritada.</p>
      ) : (
        favorites.map((item) => (
          <Card key={ item.id } news={ item } handleFavoriteNews={ handleFavoriteNews } />
        ))
      ) }
    </section>
  );
}

export default Favorites;
