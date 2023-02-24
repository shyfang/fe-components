export interface Props {
  type?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  prefixCls?: string;
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
