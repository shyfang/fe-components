import classNames from 'classnames';
import React from 'react';
import { ButtonProps } from './interface';

export const Button = (props: ButtonProps) => {
  const {
    type,
    disabled,
    size,
    children,
    href,
    circle,
    className,
    ...restProps
  } = props;
  const { style = {} } = { ...restProps };

  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: type === 'link' && disabled,
    circle: type !== 'link' && circle,
  });
  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps} style={{ ...style }}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={classes}
        disabled={disabled}
        {...restProps}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  type: 'defalut',
};

export default Button;
