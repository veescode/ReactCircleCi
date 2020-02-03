/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../Loading';

describe('Loader tests', () => {
  it('Should render without any issues', () => {
    const instance = renderer.create(<Loading />);
    expect(instance).toMatchSnapshot();
  });
});
