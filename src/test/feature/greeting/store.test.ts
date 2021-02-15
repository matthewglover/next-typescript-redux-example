import greetingReducer, { Greeting, UpdateGreeting, updateName } from '../../../main/feature/greeting/store';

describe('greetingReducer', () => {
  test('foo', () => {
    const initialState: Greeting = {
      name: 'Matt',
    };

    const updateGreeting: UpdateGreeting = {
      name: 'Oscar',
    };

    expect(greetingReducer(initialState, updateName(updateGreeting))).toEqual({ name: 'Oscar' });
    expect(initialState).toEqual({ name: 'Matt' });
  });
});
