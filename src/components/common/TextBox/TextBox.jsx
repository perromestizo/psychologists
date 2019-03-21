import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/common/Icon';
import Label from 'components/common/Label';

import eventHandlerCreator from 'utils/eventHandlerCreator';

import styles from './TextBox.scss';

const propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

const defaultProps = {
  className: '',
  height: 35,
  iconColor: undefined,
  iconName: '',
  iconSize: undefined,
  id: 'text-box',
  isDisabled: false,
  label: '',
  labelClass: '',
  placeholder: ''
};

const TextBox = ({
  className,
  height,
  iconColor,
  iconName,
  iconSize,
  id,
  isDisabled,
  label,
  labelClass,
  name,
  onChange,
  placeholder
}) => {
  const handleOnChange = eventHandlerCreator({
    isDisabled,
    eventValueSelector: event => event.target.value,
    eventValueKey: 'textValue',
    callback: onChange
  });

  const textBoxClasses = classnames(styles['text-box'], {
    [styles.disabled]: isDisabled,
    [className]: !!className
  });

  const textBoxInlineStyles = {
    height
  };

  return (
    <Fragment>
      { label && <Label className={labelClass} labelFor={id} text={label} /> }
      <div className={styles['inner-container']}>
        <input
          className={textBoxClasses}
          disabled={isDisabled}
          id={id}
          name={name}
          onChange={handleOnChange}
          placeholder={placeholder}
          style={textBoxInlineStyles}
          type='text'
        />
        { iconName && <Icon color={iconColor} iconName={iconName} size={iconSize} /> }
      </div>
    </Fragment>
  );
};

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;
