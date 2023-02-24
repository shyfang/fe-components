import React, { FunctionComponent, ReactNode } from 'react';
import { isBrowser, loadResource } from '../utils';
import { IconProps } from './icon';
import Icon from './index';

export default function createFromIconfont(
  scriptUrl: string,
): FunctionComponent<IconProps> {
  if (isBrowser) {
    loadResource(scriptUrl);
  }
  const Iconfont = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
    const { type } = props;

    let content: ReactNode;
    if (type) {
      content = <use xlinkHref={`#${type}`} />;
    }

    return (
      <Icon {...props} ref={ref}>
        {content}
      </Icon>
    );
  });
  return Iconfont;
}
