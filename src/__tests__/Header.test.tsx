import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../components/Header';

test('Header', () => {
  const checkbox = shallow(<Header />);

  expect(shallow).toMatchSnapshot();
});
