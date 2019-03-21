import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from './CheckBox';
import Label from 'components/common/Label';

describe('<CheckBox />', () => {
  it('should render an `input[type="checkbox"]` element', () => {
    const wrapper = shallow(<CheckBox name='test' onCheck={() => {}} value='1' />);
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
  });

  it('should have the class provided by the `className` prop if it is passed', () => {
    const myClass = 'my-class';
    const wrapper = shallow(<CheckBox className={myClass} name='test' onCheck={() => {}} value='1' />);
    expect(wrapper.find('input[type="checkbox"]').hasClass(myClass)).toBe(true);
  });

  it('should render the container element with the class provided by `containerClass` if it is passed', () => {
    const myContainerClass = 'my-container-class';
    const wrapper = shallow(<CheckBox containerClass={myContainerClass} name='test' onCheck={() => {}} value='1' />);
    expect(wrapper.find('.container').hasClass(myContainerClass)).toBe(true);
  });

  it('should have the `disabled` class if the `isDisabled` prop is true', () => {
    const wrapper = shallow(<CheckBox isDisabled name='test' onCheck={() => {}} value='1' />);
    expect(wrapper.find('input[type="checkbox"]').hasClass('disabled')).toBe(true);
  });

  it('should render a `Label` component if the `label` and `id` props are passed', () => {
    const wrapper = shallow(<CheckBox id='checkBox1' label='Test' name='test' onCheck={() => {}} value='1' />);
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('should not render a `Label` component if the `label` prop is passed but the `id` prop is not passed', () => {
    const wrapper = shallow(<CheckBox label='Test' name='test' onCheck={() => {}} value='1' />);
    expect(wrapper.find(Label)).toHaveLength(0);
  });

  it('should not render a `Label` component if the `id` prop is passed but the `label` prop is not passed', () => {
    const wrapper = shallow(<CheckBox id='checkBox1' name='test' onCheck={() => {}} value='1' />);
    expect(wrapper.find(Label)).toHaveLength(0);
  });

  it('should call the `onCheck` prop when clicking on it and when the `isDisabled` prop is false', () => {
    const mockedOnCheck = jest.fn();
    const mockedEvent = {
      target: {
        checked: true
      }
    };
    const wrapper = shallow(<CheckBox name='test' onCheck={mockedOnCheck} value='1' />);
    wrapper.find('input[type="checkbox"]').simulate('change', mockedEvent);
    expect(mockedOnCheck).toHaveBeenCalled();
  });

  it('should not call the `onCheck` prop when `isDisabled` prop is true', () => {
    const mockedOnCheck = jest.fn();
    const wrapper = shallow(<CheckBox isDisabled name='test' onCheck={mockedOnCheck} value='1' />);
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(mockedOnCheck).not.toHaveBeenCalled();
  });
});
