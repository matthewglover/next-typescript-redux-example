import * as React from 'react';
import * as redux from 'react-redux';
import { render, screen } from '@testing-library/react';
import Hello from '../../../../main/feature/greeting/components/Hello';

describe('Hello', () => {
  test('renders', async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue({ name: 'Fred' });

    render(<Hello />);
    await screen.findByText('Hello, Fred!');
  });
});
