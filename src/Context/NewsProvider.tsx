import { useState, useEffect } from 'react';
import { ItemsType, NewsProviderType } from '../types';
import NewsContext from './NewsContext';

function NewsProvider({ children }: NewsProviderType) {
  const [newsResults, setNewsResults] = useState<ItemsType[]>([]);
  const [releaseResults, setReleaseResults] = useState<ItemsType[]>([]);
  const [favorites, setFavorites] = useState<ItemsType[]>([]);

  const handleFavoriteNews = (news: ItemsType) => {
    const alreadyFavorited = favorites.some((fav) => fav.id === news.id);
    if (alreadyFavorited) {
      const filteredFavorites = favorites.filter((fav) => fav.id !== news.id);
      setFavorites(filteredFavorites);
    }
    if (!alreadyFavorited) {
      setFavorites([...favorites, news]);
    }
  };

  useEffect(() => {
    const alreadyFavorites = () => {
      const hasFavorites = localStorage.getItem('favorites');
      const favorited = hasFavorites && JSON.parse(hasFavorites);
      setFavorites(favorited);
    };
    alreadyFavorites();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const API_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=100';
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setNewsResults(data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        const API_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release&qtd=100';
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setReleaseResults(data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRelease();
  }, []);

  const context = {
    newsResults,
    releaseResults,
    handleFavoriteNews,
    favorites,
  };

  return (
    <NewsContext.Provider value={ context }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
