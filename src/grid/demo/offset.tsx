/**
 * title: 左右偏移
 * description: 列偏移。使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。
 */
import { Col, Row } from 'nova-ui';
import React from 'react';

const DemoBox: React.FC<{ children: React.ReactNode }> = (props) => (
  <div
    style={{
      background: 'var(--nova-primary1)',
      textAlign: 'center',
    }}
  >
    {props.children}
  </div>
);
export default () => (
  <Row justify="space-between" align="middle" style={{ background: '#ddf8f8' }}>
    <Col span={2}>
      <DemoBox>col-2</DemoBox>
    </Col>
    <Col span={3} offset={1}>
      <DemoBox>col-4</DemoBox>
    </Col>
    <Col span={4} offset={2}>
      <DemoBox>col-6</DemoBox>
    </Col>
  </Row>
);
