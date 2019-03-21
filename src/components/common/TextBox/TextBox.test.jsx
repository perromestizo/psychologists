import React from 'react';
import { shallow } from 'enzyme';

import TextBox from './TextBox';
import Icon from 'components/common/Icon';
import Label from 'components/common/Label';

describe('<TextBox />', () => {
  it('should render an `input[type="text"]`', () => {
    const wrapper = shallow(<TextBox name='text-box' onChange={() => {}} />);
    expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  });

  it('should render the label if the `label` prop is passed', () => {
    const wrapper = shallow(<TextBox label='Test' name='text-box' onChange={() => {}} />);
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('should not render the label if the `label` prop is not passed', () => {
    const wrapper = shallow(<TextBox name='text-box' onChange={() => {}} />);
    expect(wrapper.find(Label)).toHaveLength(0);
  });

  it('should have the provided `className` when it is passed', () => {
    const coolClass = 'cool-class';
    const wrapper = shallow(<TextBox className={coolClass} name='text-box' onChange={() => {}} />);
    expect(wrapper.find('input').hasClass(coolClass)).toBe(true);
  });

  it('should call the `onChange` function when changes', () => {
    const mockedOnChange = jest.fn();
    const mockedEvent = {
      target: {
        value: 'Yay!'
      }
    };
    const wrapper = shallow(<TextBox name='text-box' onChange={mockedOnChange} />);
    wrapper.find('input').simulate('change', mockedEvent);
    expect(mockedOnChange).toHaveBeenCalled();
  });

  it('should not call the `onChange` function when it is disabled', () => {
    const mockedOnChange = jest.fn();
    const wrapper = shallow(<TextBox isDisabled name='text-box' onChange={mockedOnChange} />);
    wrapper.find('input').simulate('change');
    expect(mockedOnChange).not.toHaveBeenCalled();
  });

  it('should have the `disabled` class when `isDisabled` is passed', () => {
    const wrapper = shallow(<TextBox isDisabled name='text-box' onChange={() => {}} />);
    expect(wrapper.find('input').hasClass('disabled')).toBe(true);
  });

  it('should render an `Icon` component when the `iconName` prop is passed', () => {
    const wrapper = shallow(<TextBox iconName='icon' name='text-box' onChange={() => {}} />);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('should not render an `Icon` component when the `iconName` prop is not passed', () => {
    const wrapper = shallow(<TextBox name='text-box' onChange={() => {}} />);
    expect(wrapper.find(Icon)).toHaveLength(0);
  });

  // it('should be disabled when `isDisabled` is true', () => {
  //   const wrapper = shallow(<TextBox isDisabled name='text-box' onChange={() => {}} />);
  //   expect(wrapper.find('input[type="text"][disabled]')).toHaveLength(1);
  // });

  // it('should not be disabled when `isDisabled` is false', () => {
  //   const wrapper = shallow(<TextBox name='text-box' onChange={() => {}} />);
  //   expect(wrapper.find('input[disabled]')).toHaveLength(0);
  // });
});
