import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Home.module.css';

import Card from '../../Components/Card/Card';
import NewsContext from '../../Context/NewsContext';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const { newsResults, handleFavoriteNews } = useContext(NewsContext);

  // variável para armazenar apenas os últimos 3 resultados da API //
  const getThreeLatestNews = newsResults.slice(1, 4);

  return (
    location.pathname === '/' && (
      <section>
        <div className={ styles.cardsGrid }>
          {getThreeLatestNews.map((item) => (
            <Card
              handleFavoriteNews={ handleFavoriteNews }
              key={ item.id }
              news={ item }
            />
          ))}
        </div>
        <button
          onClick={ () => navigate('/news') }
          className={ styles.button }
        >
          MAIS NOTÍCIAS

        </button>
      </section>
    )
  );
}

export default Home;
