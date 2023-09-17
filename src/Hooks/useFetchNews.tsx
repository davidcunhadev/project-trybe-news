import { useEffect, useState } from 'react';
import { ItemsType } from '../types';

export const useFetchNews = async () => {
  const [newsResults, setNewsResults] = useState<ItemsType[]>([]);
  const API_URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data.items);
        setNewsResults(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return newsResults;
};
