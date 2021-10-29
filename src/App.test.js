import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renderiza a palavra "carregando" na tela', () => {
  render(<App />);
  
  const carregando = screen.getByText(/carregando/i)
  expect(carregando).toBeInTheDocument()
});

test('Verifica se o jogo Minecraft aparece tela', async () => {
  render(<App />);
  
  await waitForElementToBeRemoved(() => screen.getByText(/carregando/i))
  
  const minecraft = await screen.getAllByText(/minecraft/i)
  expect(minecraft[0]).toBeInTheDocument()
})

test('verifica detalhes', async () => {
  render(<App />)

  const detalhes = await screen.findAllByText(/ver detalhes/i)
  expect(detalhes[1]).toBeInTheDocument()

  userEvent.click(detalhes[1]);

  const releaseYear = await screen.findByText(/release year/i)
  expect(releaseYear).toBeInTheDocument()

  const sales = await screen.findByText(/sales/i)
  expect(sales).toBeInTheDocument()
})

test('botão', async () => {
  render(<App />)

  await waitForElementToBeRemoved(() => screen.getByText(/carregando/i))

  const btn = screen.getByText(/voltar/i)
  userEvent.click(btn)

  await waitForElementToBeRemoved(() => screen.getByText(/carregando/i))

  const games = screen.getByRole('heading', {name: /os melhores jogos/i})
  expect(games).toBeInTheDocument()
})