import * as React from 'react';
import { Provider } from 'react-redux';
import Hello from '../main/feature/greeting/components/Hello';
import store from '../main/config/store';
import UpdateGreetingButton from '../main/feature/greeting/components/UpdateGreetingButton';

export default function Home() {
  return (
    <Provider store={store}>
      <Hello />
      <br />
      <br />
      <UpdateGreetingButton />
    </Provider>
  );
}
