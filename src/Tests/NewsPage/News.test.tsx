import { vi } from 'vitest';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouter } from '../Helpers/RenderWithRouter';
import mockFetch from '../mockFetch';

describe('Testes referentes a página News', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  beforeEach(async () => {
    renderWithRouter(<App />, { route: '/news' });
    global.fetch = vi.fn().mockImplementation(mockFetch);
  });

  test('Testa se o Header possui o texto Trybe News e contem sua logo', () => {
    expect(screen.getByRole('heading', { name: /trybe news/i })).toHaveTextContent('TRYBE NEWS');
    expect(screen.getByRole('img', { name: /trybe logo/i })).toBeInTheDocument();
  });

  test('testa se a cor do botão do card principal muda ao clicar em favoritar.', async () => {
    const button = await screen.findByTestId('37931');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(button).toHaveClass('favorited');
    await userEvent.click(button);
    expect(button).toHaveClass('notFavorited');
  });
});
