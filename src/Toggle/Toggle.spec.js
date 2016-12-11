/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';
import { assert } from 'chai';

describe('Toggle', () => {
  it('should render a <Toggle> element', () => {
    const wrapper = shallow(
      <Toggle />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
