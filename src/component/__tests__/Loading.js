/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../Loading';

describe('Loader tests', () => {
  const onCancel = jest.fn();
  const instance = renderer.create(<Loading onCancel={onCancel} />);

  it('Should render without any issues', () => {
    expect(instance).toMatchSnapshot();
  });
});
