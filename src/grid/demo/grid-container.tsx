/**
 * title: GridContainer
 * description: 一般页面使用（或者块使用），GridContainer放在外层，所有列（Col）必须放在 Row 内。
 */
import { Col, GridContainer, Row } from 'nova-ui';
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
  <GridContainer style={{ background: '#ddf8f8' }}>
    <Row
      justify="space-between"
      align="middle"
      style={{ background: '#ddf8f8' }}
    >
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
  </GridContainer>
);
