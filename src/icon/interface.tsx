import React from 'react';

export interface Props {
  type?: string;
  // theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  // viewBox?: string;
  className?: string;
  prefixCls?: string;
}
