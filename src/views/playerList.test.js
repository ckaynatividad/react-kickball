import { render, screen } from '@testing-library/react';
import Players from './playerList';

test('players rendering', () => {
  const container = render(
    <Players name="Bennie Jetts" />
  );
  expect(container).toMatchSnapshot();
});