import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Empty: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <div>Empty</div>;
  };

  export default Empty;
