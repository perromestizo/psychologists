import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import eventHandlerCreator from 'utils/eventHandlerCreator';

import styles from './Button.scss';

const propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  isDisabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number
};

const defaultProps = {
  className: '',
  height: 40,
  isDisabled: false,
  isPrimary: true,
  isSecondary: false,
  width: 130
};

const Button = ({
  className,
  height,
  isDisabled,
  isPrimary,
  isSecondary,
  onClick,
  text,
  width
}) => {
  const handleOnClick = eventHandlerCreator({
    isDisabled,
    callback: onClick
  });

  const buttonClasses = classnames(styles.button, {
    [styles.primary]: isPrimary && !isSecondary,
    [styles.secondary]: isSecondary && !isPrimary,
    [styles.disabled]: isDisabled,
    [className]: !!className
  });

  const buttonInlineStyles = {
    height,
    width
  };

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      onClick={handleOnClick}
      style={buttonInlineStyles}
    >
      {text}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
