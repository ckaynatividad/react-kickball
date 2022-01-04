import { render, screen } from '@testing-library/react';
import Teams from './teamList';

test('renders team list', () => {
  const container = render(
    <Teams 
      id="1"
      name="Bridge City Sneakers"
      created_at="2021-11-22T20:07:58+00:00"
      city="Portland"
      state="OR"/>
  );
  expect(container).toMatchSnapshot();
});