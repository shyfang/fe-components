import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
// import './style';

type ColSpanType = number | string;
export interface ColSize {
  span?: ColSpanType;
  offset?: ColSpanType;
  order?: ColSpanType;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  children?: ReactNode;
  span?: ColSpanType;
  offset?: ColSpanType;
  order?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
}

const sizes = ['xs', 'sm', 'md'] as const;
const Col: FC<ColProps> = (props) => {
  const { children, className, prefixCls, span, offset, order, ...others } =
    props;

  let sizeClassObj = {};
  sizes.forEach((size) => {
    let sizeProps: ColSize = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]:
        sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
    };
  });

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
    },
    className,
    sizeClassObj,
  );

  return (
    <div {...others} className={cls}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  prefixCls: 'nova-col',
};
export default Col;
