import React, { FC, ReactNode } from 'react';

export interface GridContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const GridContainer: FC<GridContainerProps> = ({ children }) => {
  return <div className="nova-grid-container">{children}</div>;
};

GridContainer.defaultProps = {};
export default GridContainer;
