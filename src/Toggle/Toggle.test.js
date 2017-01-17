/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Toggle from './Toggle';

it('renders enabled', () => {
  const wrapper = mount(
    <Toggle
      value={true}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('reders disabled', () => {
  const wrapper = mount(
    <Toggle
      value={false}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('reders with label', () => {
  const wrapper = mount(
    <Toggle
      value={true}
      label={'My label'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('reders custom color', () => {
  const wrapper = mount(
    <Toggle
      value={true}
      color={'#3498db'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
