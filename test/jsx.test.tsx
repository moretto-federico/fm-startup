
import React from 'react';
import { shallow } from 'enzyme';

function Hello() {
  return <h1>Hello!</h1>;
}


test('renders the heading', () => {
  const result = shallow(<Hello />).contains(<h1>Hello!</h1>);
  expect(result).toBeTruthy();
});