import { render, screen } from '@testing-library/react';
import Player from './playerDetail';

test('player detail', () => {
  const container = render(
    <Player match={{ params: { id: 1 } }} />
  );
  expect(container).toMatchSnapshot();
});