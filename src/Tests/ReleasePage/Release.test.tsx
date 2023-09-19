import { vi } from 'vitest';
import { screen } from '@testing-library/dom';
import App from '../../App';
import { renderWithRouter } from '../Helpers/RenderWithRouter';
import mockFetch from '../mockFetch';

describe('Testes referentes a página News', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  beforeEach(async () => {
    renderWithRouter(<App />, { route: '/release' });
    global.fetch = vi.fn().mockImplementation(mockFetch);
  });

  test('Testa se o Header possui o texto Trybe News e contem sua logo', () => {
    expect(screen.getByRole('heading', { name: /trybe news/i })).toHaveTextContent('TRYBE NEWS');
    expect(screen.getByRole('img', { name: /trybe logo/i })).toBeInTheDocument();
  });

  test('Testa se a última notícia do card principal está presente na tela.', async () => {
    expect(await screen.findByRole('heading', { name: /servidores do ibge no rs se mobilizam para ajudar desabrigados nas enchentes/i })).toBeInTheDocument();
  });

  test('testa se alguma noticia de release está presente na tela.', async () => {
    expect(await screen.findByRole('heading', { name: /volume dos serviços cresce 0,5% em julho/i }));
  });
});
