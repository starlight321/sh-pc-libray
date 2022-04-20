import React from 'react';
import classNames from 'classnames';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import styles from './index.less';

const arrows = [
  { Component: ArrowUpOutlined, defaultClassName: styles.arrowUp },
  { Component: ArrowDownOutlined, defaultClassName: styles.arrowDown },
];

type ArrowProps = {
  type: 'up' | 'down';
  style?: React.CSSProperties;
  className?: string;
};

const ArrowChange: React.FC<ArrowProps> = ({
  type,
  className,
  ...restProps
}) => {
  const { Component, defaultClassName } = arrows[+(type === 'down')];

  return (
    <Component
      className={classNames(defaultClassName, className)}
      {...restProps}
    />
  );
};

export const renderRatio = (ratio: Nullable<number>) => {
  if (typeof ratio !== 'number')
    return <span className={styles.marginLeft8}>-</span>;

  return (
    <span className={styles.marginLeft8}>
      <ArrowChange
        type={ratio > 0 ? 'up' : 'down'}
        style={{ marginRight: 4 }}
      />
      {parseFloat((Math.abs(ratio) * 100).toFixed(2))}%
    </span>
  );
};

export default ArrowChange;
