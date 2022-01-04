import { render, screen } from '@testing-library/react';
import TeamDetail from './teamDetail';

test('team details', () => {
  const container = render (
    <TeamDetail match={{ params: { id: 1 } }}/>
  );
  expect(container).toMatchSnapshot();
});