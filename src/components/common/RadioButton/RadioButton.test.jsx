import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';
import Label from 'components/common/Label';

describe('<RadioButton />', () => {
  it('should render an `input[type="radio"]`', () => {
    const wrapper = shallow(<RadioButton name='radio-button' onCheck={() => {}} value='1' />);
    expect(wrapper.find('input[type="radio"]')).toHaveLength(1);
  });

  it('should have the class provided by `className` when it is passed', () => {
    const myClass = 'my-class';
    const wrapper = shallow(<RadioButton className={myClass} name='radio-button' onCheck={() => {}} value='1' />);
    expect(wrapper.find('input[type="radio"]').hasClass(myClass)).toBe(true);
  });

  it('should render the container with the CSS class provided by the `containerClass` prop if it is passed', () => {
    const myContainerClass = 'my-container';
    const wrapper = shallow(<RadioButton containerClass={myContainerClass} name='test-radio' onCheck={() => {}} value='1' />);
    expect(wrapper.find('.container').hasClass(myContainerClass)).toBe(true);
  });

  // it('should be checked when `isChecked` is true', () => {
  //   const wrapper = shallow(<RadioButton isChecked name='radio-button' onCheck={() => {}} value='1' />);
  //   expect(wrapper.find('input[type="radio"][checked]')).toHaveLength(1);
  // });

  // it('should not be checked when `isChecked` is false', () => {
  //   const wrapper = shallow(<RadioButton name='radio-button' onCheck={() => {}} value='1' />);
  //   expect(wrapper.find('input[type="radio"][checked]')).toHaveLength(0);
  // });

  // it('should be disabled when `isDisabled` is true', () => {
  //   const wrapper = shallow(<RadioButton isDisabled name='radio-button' onCheck={() => {}} value='1' />);
  //   expect(wrapper.find('input[type="radio"][disabled]')).toHaveLength(1);
  // });

  // it('should not be disabled when `isDisabled` is false', () => {
  //   const wrapper = shallow(<RadioButton name='radio-button' onCheck={() => {}} value='1' />);
  //   expect(wrapper.find('input[type="radio"][disabled]')).toHaveLength(0);
  // });

  it('should render a `Label` component when the `label` and the `id` props are passed', () => {
    const wrapper = shallow(<RadioButton id='r1' label='Test' name='radio-button' onCheck={() => {}} value='1' />);
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('should not render a `Label` component when the `label` prop is not passed and the `id` prop is passed', () => {
    const wrapper = shallow(<RadioButton id='r1' name='radio-button' onCheck={() => {}} value='1' />);
    expect(wrapper.find(Label)).toHaveLength(0);
  });

  it('should not render a `Label` component when the `id` prop is not valid or is not passed', () => {
    const wrapper = shallow(<RadioButton id='' label='Test' name='radio-button' onCheck={() => {}} value='1' />);
    expect(wrapper.find(Label)).toHaveLength(0);
  });

  it('should call the `onCheck` function when clicking on it and when `isDisabled` is not passed', () => {
    const mockedOnCheck = jest.fn();
    const mockedEvent = {
      target: {
        checked: true
      }
    };
    const wrapper = shallow(<RadioButton name='radio-button' onCheck={mockedOnCheck} value='1' />);
    wrapper.find('input[type="radio"]').simulate('change', mockedEvent);
    expect(mockedOnCheck).toHaveBeenCalled();
  });

  it('should not call the `onCheck` function when clicking on it and when `isDisabled` is passed', () => {
    const mockedOnCheck = jest.fn();
    const wrapper = shallow(<RadioButton isDisabled name='radio-button' onCheck={mockedOnCheck} value='1' />);
    wrapper.find('input[type="radio"]').simulate('change');
    expect(mockedOnCheck).not.toHaveBeenCalled();
  });

  it('should have the `disabled` class when `isDisabled` is passed', () => {
    const wrapper = shallow(<RadioButton isDisabled name='radio1' onCheck={() => {}} value='1' />);
    expect(wrapper.find('input[type="radio"]').hasClass('disabled')).toBe(true);
  });
});
