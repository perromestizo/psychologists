import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from 'components/common/Label';

import eventHandlerCreator from 'utils/eventHandlerCreator';

import styles from './CheckBox.scss';

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

const CheckBox = ({
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

  const checkBoxClasses = classnames(styles['check-box'], {
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
        className={checkBoxClasses}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={handleOnChange}
        type='checkbox'
        value={value}
      />
      { label && id && <Label className={labelClasses} labelFor={id} text={label} /> }
    </div>
  );
};

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
