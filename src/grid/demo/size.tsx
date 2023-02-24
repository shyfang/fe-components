/**
 * title: 响应式
 * description: xs sm md,三种布局分别对应phone pad pc
 */
import { Col, Row } from 'nova-ui';
import React from 'react';

const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = (
  props,
) => (
  <div
    style={{
      height: props.value,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#1ed2d2',
    }}
  >
    {props.children}
  </div>
);

export default () => (
  <>
    <Row align="top" style={{ background: '#fcfcfd' }}>
      <Col span={2} xs={4}>
        <DemoBox value={50}> col-2</DemoBox>
      </Col>
      <Col span={4} xs={{ span: 4 }}>
        <DemoBox value={100}> col-4</DemoBox>
      </Col>
      <Col span={6} xs={4}>
        <DemoBox value={80}> col-6</DemoBox>
      </Col>
    </Row>
    <div>xs</div>

    <Row align="middle" style={{ background: '#fcfcfd', marginTop: '24px' }}>
      <Col span={2} sm={3}>
        <DemoBox value={50}> col-2</DemoBox>
      </Col>
      <Col span={4} sm={{ span: 3 }}>
        <DemoBox value={100}> col-4</DemoBox>
      </Col>
    </Row>
    <div>sm</div>

    <Row align="bottom" style={{ background: '#fcfcfd', marginTop: '24px' }}>
      <Col span={2}>
        <DemoBox value={50}> col-2</DemoBox>
      </Col>
      <Col span={4} md={{ span: 4 }}>
        <DemoBox value={100}> col-4</DemoBox>
      </Col>
      <Col span={4} md={6}>
        <DemoBox value={80}> col-6</DemoBox>
      </Col>
    </Row>
    <div>md</div>
  </>
);
