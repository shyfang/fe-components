/**
 * title: 基础栅格
 * description: 使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
 */
import { Col, Row } from 'novadax-components';
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
    <Col span={4}>
      <DemoBox>col-4</DemoBox>
    </Col>
    <Col span={6}>
      <DemoBox>col-6</DemoBox>
    </Col>
  </Row>
);
