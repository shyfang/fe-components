import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';
import createFromIconfont from './IconFont';
import { Props } from './interface';
import './style';

const INNER_SVG_PROPS = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
};

export type IconProps = Props & HTMLAttributes<HTMLElement>;

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<HTMLElement>
  > {
  createFromIconfont: typeof createFromIconfont;
}

const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { type, size, prefixCls, className, ...rest } = props;
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-${size}`]: !!size,
  });

  const newProps = {
    className: cls,
    type,
    size,
    ...rest,
  };

  return (
    <i {...newProps} ref={ref}>
      <svg {...INNER_SVG_PROPS}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </i>
  );
}) as CompoundedComponent;

/**
 * 加载iconfont.cn图标
 *
 * @param {string} scriptUrl
 */
Icon.createFromIconfont = createFromIconfont;

// load icons
Icon.createFromIconfont('//at.alicdn.com/t/c/font_3901915_179rk4685l9.js');

Icon.defaultProps = {
  prefixCls: 'nova-icon',
  size: 'md',
};
export default Icon;
