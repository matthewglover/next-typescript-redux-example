import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../../../main/config/store';
import UpdateGreetingButton from '../../../../main/feature/greeting/components/UpdateGreetingButton';
import { updateName } from '../../../../main/feature/greeting/store';
import * as GreetingLib from '../../../../main/feature/greeting/lib';

describe('UpdateGreetingButton', () => {
  test('renders', async () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const pickNameSpy = jest.spyOn(GreetingLib, 'pickName');

    const updatedName = 'Garry';
    pickNameSpy.mockReturnValue(updatedName);

    render(<UpdateGreetingButton />);

    expect(dispatchSpy).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('button'));

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(updateName({ name: updatedName }));
  });
});
