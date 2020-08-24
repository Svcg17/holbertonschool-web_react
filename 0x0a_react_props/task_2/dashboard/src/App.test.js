import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notifications from './Notifications';
  

it('renders properly', () => {
  shallow(<App />);
});

it('checking renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(Login)).toHaveLength(1);
  expect(wrapper.find(Footer)).toHaveLength(1);
  expect(wrapper.find(Notifications)).toHaveLength(1);
});
