import React from 'react';
import { shallow } from 'enzyme';

import Label from 'components/common/Label';

describe('<Label />', () => {
  it('should render a `label` element', () => {
    const wrapper = shallow(<Label text='Test' />);
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('should render the provided text', () => {
    const myText = 'I am cool!';
    const wrapper = shallow(<Label text={myText} />);
    expect(wrapper.text()).toBe(myText);
  });

  it('should have the provided `className` when passing it', () => {
    const myLabelClass = 'my-label';
    const wrapper = shallow(<Label className={myLabelClass} text='Test' />);
    expect(wrapper.hasClass(myLabelClass)).toBe(true);
  });
});
