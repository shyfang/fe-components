import React, { FC, ReactNode } from 'react';
// import './style';

export interface GridContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const GridContainer: FC<GridContainerProps> = ({
  children,
  className,
  ...others
}) => {
  return (
    <div {...others} className={`nova-grid-container ${className}`}>
      {children}
    </div>
  );
};

GridContainer.defaultProps = {};
export default GridContainer;
