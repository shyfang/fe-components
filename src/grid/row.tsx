import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  children?: ReactNode;
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

const Row: FC<RowProps> = (props) => {
  const { prefixCls, className, children, align, justify, ...others } = props;
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-align-${align}`]: align !== undefined,
      [`${prefixCls}-justify-${justify}`]: justify !== undefined,
    },
    className,
  );
  return (
    <div {...others} className={cls}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  prefixCls: 'nova-row',
};
export default Row;
