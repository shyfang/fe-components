import classnames from 'classnames';
import React from 'react';
import { isBrowser, loadResource } from '../utils/dom';
import { Props } from './interface';

const INNER_SVG_PROPS = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  viewBox: '0 0 32 32',
};

const Icon: React.ForwardRefExoticComponent<Props> & {
  /**
   * @description 加载iconfont.cn图标
   */
  loadFromIconfontCN?: (scriptUrl: string) => void;
} = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { type, size, prefixCls, className, ...rest } = props;
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}--${size}`]: !!size,
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
});

/**
 * 加载iconfont.cn图标
 *
 * @param {string} scriptUrl
 */
Icon.loadFromIconfontCN = (scriptUrl: string): void => {
  if (isBrowser) {
    loadResource(scriptUrl);
  }
};

// load icons
Icon.loadFromIconfontCN('//at.alicdn.com/t/c/font_3901915_179rk4685l9.js');

Icon.defaultProps = {
  prefixCls: 'nova-icon',
  size: 'md',
};
export default Icon;
