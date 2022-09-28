import { screen, within, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import { Album, Song } from '../pages';
import { BackButton } from '../components'

describe('App', () => {

  beforeEach(() => render(<App />, { wrapper: MemoryRouter }))
  beforeEach(() => render(<Album />, { wrapper: MemoryRouter }))
  beforeEach(() => render(<Song />, { wrapper: MemoryRouter }))
  beforeEach(() => render(<BackButton />, { wrapper: MemoryRouter }))

  test("renders h1 tag: Eminem", () => {
    const title = screen.getByTitle('Eminem');
    expect(title.textContent).toContain("Eminem");
  });

  test("There should be two tables present", () => {
    const tables = screen.getAllByRole('table');
    expect(tables.length).toBe(2)
  });

  test("like buttons should be present", () => {
    const likeBtn = screen.getAllByRole('switch')
    expect(likeBtn.length).toBe(8)
  });

  test('renders back button', () => {
    const btn = screen.getAllByRole('button', { name: 'Go Back' })
    expect(btn).toBeInTheDocument
  })

});
