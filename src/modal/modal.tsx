import { LocaleReceiver } from 'novadax-components';
import React from 'react';
import { Props } from './interface';
import './style';
const defaultProps = {};

const Modal: React.FC<Props> = (userProps) => {
  const props = { ...defaultProps, ...userProps };

  return (
    <LocaleReceiver componentName="Modal">
      {(contextLocale) => {
        return (
          <div {...props} className="text-color1">
            {contextLocale.okText}
          </div>
        );
      }}
    </LocaleReceiver>
  );
};

export default Modal;
