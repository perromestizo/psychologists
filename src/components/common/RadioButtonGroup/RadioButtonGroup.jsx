import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RadioButton from 'components/common/RadioButton';

import styles from './RadioButtonGroup.scss';

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
  optionCheckedId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    labelClass: PropTypes.string,
    radioClass: PropTypes.string,
    value: PropTypes.string
  })).isRequired
};

const defaultProps = {
  className: '',
  optionCheckedId: ''
};

const buildRadioButtons = (options, optionCheckedId, name, onCheck) => options.map((option, index) => {
  const { id, isDisabled, label, labelClass, radioClass, value } = option;
  const isChecked = id === optionCheckedId;

  return (
    <RadioButton
      className={radioClass}
      id={id}
      isChecked={isChecked}
      isDisabled={isDisabled}
      key={`radio-button-${index}`}
      label={label}
      labelClass={labelClass}
      name={name}
      onCheck={onCheck}
      value={value}
    />
  );
});

const RadioButtonGroup = ({
  className,
  name,
  onCheck,
  optionCheckedId,
  options
}) => {
  const radioButtons = buildRadioButtons(options, optionCheckedId, name, onCheck);
  const radioButtonGroupClasses = classnames(styles['radio-button-group'], {
    [className]: !!className
  });

  return (
    <div className={radioButtonGroupClasses}>
      {radioButtons}
    </div>
  );
};

RadioButtonGroup.propTypes = propTypes;
RadioButtonGroup.defaultProps = defaultProps;

export default RadioButtonGroup;
