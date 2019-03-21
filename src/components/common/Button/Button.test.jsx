import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  it('should render a HTML button', () => {
    const wrapper = shallow(<Button onClick={() => {}} text='Test' />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should have the `button` class when renders', () => {
    const wrapper = shallow(<Button onClick={() => {}} text='Test' />);
    expect(wrapper.hasClass('button')).toBe(true);
  });

  it('should render the passed text', () => {
    const text = 'Click me!';
    const wrapper = shallow(<Button onClick={() => {}} text={text} />);
    expect(wrapper.text()).toEqual(text);
  });

  it('should not call the `onClick` function when clicking on it and when `isDisabled` is true', () => {
    const mockedOnClick = jest.fn();
    const wrapper = shallow(<Button isDisabled onClick={mockedOnClick} text='Test' />);
    wrapper.simulate('click');
    expect(mockedOnClick).not.toHaveBeenCalled();
  });

  it('should call the `onClick` function when clicking on it and when `isDisabled` is false', () => {
    const mockedOnClick = jest.fn();
    const wrapper = shallow(<Button onClick={mockedOnClick} text='Test' />);
    wrapper.simulate('click');
    expect(mockedOnClick).toHaveBeenCalled();
  });

  it('should have the `primary` class when `isPrimary` is true and `isSecondary` is false', () => {
    // `isPrimary` is true by default.
    const wrapper = shallow(<Button onClick={() => {}} text='Test' />);
    expect(wrapper.hasClass('primary')).toBe(true);
  });

  it('should have the `secondary` class when `isSecondary` is true and `isPrimary` is false', () => {
    const wrapper = shallow(<Button isPrimary={false} isSecondary onClick={() => {}} text='Test' />);
    expect(wrapper.hasClass('secondary')).toBe(true);
  });

  it('should not have the `primary` and `secondary` classes when `isPrimary` and `isSecondary` are true at the same time', () => {
    const wrapper = shallow(<Button isPrimary isSecondary onClick={() => {}} text='Test' />);
    expect(wrapper.hasClass('primary secondary')).toBe(false);
  });

  it('should have the `disabled` class when `isDisabled` is true', () => {
    const wrapper = shallow(<Button isDisabled onClick={() => {}} text='Test' />);
    expect(wrapper.hasClass('disabled')).toBe(true);
  });

  it('should have the provided `className` when passing it', () => {
    const myFancyClass = 'my-fancy-class-name';
    const wrapper = shallow(<Button className={myFancyClass} onClick={() => {}} text='Test' />);
    expect(wrapper.hasClass(myFancyClass)).toBe(true);
  });

  it('should have the `disabled` attribute when `isDisabled` is passed', () => {
    const wrapper = shallow(<Button isDisabled onClick={() => {}} text='Test' />);
    expect(wrapper.hasClass('disabled')).toBe(true);
  });
});
