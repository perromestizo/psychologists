import React from 'react';
import PropTypes from 'prop-types';

import styles from './Icon.scss';

import ICONS from 'constants/icons';

const propTypes = {
  color: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
  viewBox: PropTypes.string
};

const defaultProps = {
  color: '#000',
  size: 16,
  viewBox: '0 0 1024 1024'
};

const Icon = ({ color, iconName, size, viewBox }) => {
  const icon = ICONS[iconName];

  if (!icon) {
    return null;
  }

  return (
    <svg className={styles.icon} height={size} width={size} viewBox={viewBox}>
      <path d={icon} fill={color} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
