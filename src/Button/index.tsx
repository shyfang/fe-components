import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import React, { type FC } from 'react';
// import 'antd/lib/button/style';

const Button: FC<AntButtonProps> = (props) => {
  const { children, ...baseProps } = props;
  return <AntButton {...baseProps}>{children}</AntButton>;
};

export default Button;
