import * as React from 'react';
import store from '../../../config/store';
import { updateName } from '../store';
import { pickName } from '../lib';

export default function UpdateGreetingButton() {
  return <button onClick={onClick}>Click Me!</button>;
}

function onClick(e: React.SyntheticEvent) {
  e.preventDefault();
  store.dispatch(updateName({ name: pickName() }));
}
