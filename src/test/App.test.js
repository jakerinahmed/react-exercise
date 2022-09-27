import { screen, within, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {

  beforeEach(() => {
    render(<App />);
  });

  test("renders h1 tag: Eminem", () => {
    const title = screen.getByRole('title');
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

});
