import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

jest.mock('constants/icons');

describe('<Icon />', () => {
  it('should render a `svg` element when an existent `iconName` is passed', () => {
    const wrapper = shallow(<Icon iconName='test' />);
    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should not render a `svg` element when a non-existent `iconName` is passed', () => {
    const wrapper = shallow(<Icon iconName='nonExistentIcon' />);
    expect(wrapper.find('svg')).toHaveLength(0);
  });
});
