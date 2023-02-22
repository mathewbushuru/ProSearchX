import { render, screen } from '@testing-library/react';

import { SearchQueryPage } from 'features/search/pages/search-query';

test('Random test', () => {
  render(<SearchQueryPage />);
  const linkElement = screen.getByText(/Google/i);
  expect(linkElement).toBeInTheDocument();
});
