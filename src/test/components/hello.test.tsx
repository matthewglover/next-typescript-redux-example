import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../../main/components/Hello';

describe('Hello', () => {
  test('renders', async () => {
    render(<Hello />);
    await screen.findByText('Hello World!');
  });
});
