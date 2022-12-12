import React, { type FC } from 'react';
import './index.less';
export interface TextProps {
  text: string;
  color: string;
}
const Text: FC<TextProps> = (props) => {
  const { text, color } = props;
  return (
    <div
      style={{
        color,
      }}
      className="nova-text"
    >
      {text}
    </div>
  );
};

export default Text;
