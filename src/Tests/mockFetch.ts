import { mockFetchData } from './mockFetchData';
import { mockFetchRelease } from './mockFetchRelease';

const mockFetch = (url: string) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=100') { return Promise.resolve(mockFetchData); }
    if (url === 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release&qtd=100') { return Promise.resolve(mockFetchRelease); }
  },
});

export default mockFetch;
