import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';

import styles from './News.module.css';

import Card from '../../Components/Card/Card';
import NewsContext from '../../Context/NewsContext';

function News() {
  const location = useLocation();
  const { newsResults, handleFavoriteNews } = useContext(NewsContext);
  const [newsLength, setNewsLength] = useState(15);

  // função que faz o incremento de mais 15 notícias para o estado "newsLength", e,
  // dentro da div ao fazer o slice, passamos o valor atualizado de "newsLength" para fazer o map de mais 15 cards //
  const newsPerPage = () => {
    const fixedIncrement = 15;
    setNewsLength(newsLength + fixedIncrement);
  };

  return (
    location.pathname === '/news' && (
      <section>
        <div className={ styles.cardsGrid }>
          {newsResults.slice(0, newsLength).map((item) => (
            <Card
              handleFavoriteNews={ handleFavoriteNews }
              key={ item.id }
              news={ item }
            />
          ))}
        </div>
        <button onClick={ newsPerPage } className={ styles.button }>MAIS NOTÍCIAS</button>
      </section>
    )
  );
}

export default News;
