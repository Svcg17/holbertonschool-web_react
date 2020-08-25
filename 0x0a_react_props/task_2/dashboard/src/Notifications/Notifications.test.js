import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders properly', () => {
    shallow(<Notifications />);
  });

  it('checking render', () => {
    const wrapper = shallow(<Notifications />);
    const li = wrapper.find('div');
    expect(wrapper.text()).toContain('Your notifications');
});
});
