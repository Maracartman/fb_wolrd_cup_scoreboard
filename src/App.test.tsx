import { render, screen } from 'src/utils/test';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});
