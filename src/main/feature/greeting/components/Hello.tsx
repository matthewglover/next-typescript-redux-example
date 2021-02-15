import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../config/root-reducer';

export default function Hello() {
  const { name } = useSelector(({ greeting }: RootState) => greeting);

  return <div>Hello, {name}!</div>;
}
