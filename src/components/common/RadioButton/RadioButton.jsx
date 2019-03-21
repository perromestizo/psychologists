import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from 'components/common/Label';

import eventHandlerCreator from 'utils/eventHandlerCreator';

import styles from './RadioButton.scss';

const propTypes = {
  className: PropTypes.string,
  containerClass: PropTypes.string,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  containerClass: '',
  id: '',
  isChecked: false,
  isDisabled: false,
  label: '',
  labelClass: ''
};

const RadioButton = ({
  className,
  containerClass,
  id,
  isChecked,
  isDisabled,
  label,
  labelClass,
  name,
  onCheck,
  value
}) => {
  const handleOnChange = eventHandlerCreator({
    isDisabled,
    eventValueSelector: event => event.target.checked,
    eventValueKey: 'isChecked',
    callback: onCheck,
    id,
    name,
    value
  });

  const containerClasses = classnames(styles.container, {
    [containerClass]: !!containerClass
  });

  const radioButtonClasses = classnames(styles['radio-button'], {
    [styles.disabled]: isDisabled,
    [className]: !!className
  });

  const labelClasses = classnames(styles.label, {
    [labelClass]: !!labelClass
  });

  return (
    <div className={containerClasses}>
      <input
        checked={isChecked}
        className={radioButtonClasses}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={handleOnChange}
        type='radio'
        value={value}
      />
      { label && id && <Label className={labelClasses} labelFor={id} text={label} /> }
    </div>
  );
};

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;
