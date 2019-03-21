import React from 'react';
import { shallow } from 'enzyme';

import RadioButtonGroup from './RadioButtonGroup';
import RadioButton from 'components/common/RadioButton';

describe('<RadioButtonGroup />', () => {
  it('should render as many `RadioButton` components as options in the `options` prop', () => {
    const options = [{
      id: 'radio1',
      value: '1'
    }, {
      id: 'radio2',
      value: '2'
    }];
    const wrapper = shallow(<RadioButtonGroup name='test-radio' onCheck={() => {}} options={options} />);
    expect(wrapper.find(RadioButton)).toHaveLength(options.length);
  });

  it('should not render `RadioButton` components if `options` is empty', () => {
    const wrapper = shallow(<RadioButtonGroup name='test-radio' onCheck={() => {}} options={[]} />);
    expect(wrapper.find(RadioButton)).toHaveLength(0);
  });

  it('should render the `RadioButton` components with the same provided name', () => {
    const name = 'test-radio';
    const options = [{
      id: 'radio1',
      value: '1'
    }, {
      id: 'radio2',
      value: '2'
    }, {
      id: 'radio3',
      value: '3'
    }];
    const wrapper = shallow(<RadioButtonGroup name={name} onCheck={() => {}} options={options} />);
    wrapper.find(RadioButton).forEach(node => {
      expect(node.prop('name')).toEqual(name);
    });
  });

  it('should render the `RadioButton` components with the same `onCheck` function', () => {
    const onCheck = () => console.log('YAY!!!');
    const options = [{
      id: 'radio1',
      value: '1'
    }, {
      id: 'radio2',
      value: '2'
    }];
    const wrapper = shallow(<RadioButtonGroup name='test-radio' onCheck={onCheck} options={options} />);
    wrapper.find(RadioButton).forEach(node => {
      expect(node.prop('onCheck')).toEqual(onCheck);
    });
  });

  it('should have the class provided by `className` when it is passed', () => {
    const myClass = 'my-class';
    const wrapper = shallow(<RadioButtonGroup className={myClass} name='test-radio' onCheck={() => {}} options={[]} />);
    expect(wrapper.hasClass(myClass));
  });
});
