import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Label.scss';

const propTypes = {
  className: PropTypes.string,
  labelFor: PropTypes.string,
  text: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  labelFor: ''
};

const Label = ({
  className,
  labelFor,
  text
}) => {
  const labelClasses = classnames(styles.label, {
    [className]: !!className
  });

  return (
    <label className={labelClasses} htmlFor={labelFor}>{text}</label>
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
