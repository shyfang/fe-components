import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Demo: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <div>Demo</div>;
  };

  export default Demo;
