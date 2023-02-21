import { isBrowser, loadResource } from 'nova-ui/utils/dom';
import React, { FunctionComponent, ReactNode } from 'react';
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
    console.log(type);

    let content: ReactNode;
    if (type) {
      content = <use xlinkHref={`#${type}`} />;
    }

    // fix https://github.com/ZhongAnTech/zarm/issues/835
    // @ts-ignore
    const I = Icon.default ? Icon.default : Icon;

    return (
      <I {...props} ref={ref}>
        {content}
      </I>
    );
  });
  return Iconfont;
}
