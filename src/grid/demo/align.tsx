/**
 * title: 排序
 * description: 通过 order 来改变元素的排序。
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
    <Row align="top" style={{ background: '#ddf8f8' }}>
      <Col span={2}>
        <DemoBox value={50}> col-2</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={100}> col-4</DemoBox>
      </Col>
      <Col span={6}>
        <DemoBox value={80}> col-6</DemoBox>
      </Col>
    </Row>
    <div>align: top</div>

    <Row align="middle" style={{ background: '#ddf8f8', marginTop: '24px' }}>
      <Col span={2}>
        <DemoBox value={50}> col-2</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={100}> col-4</DemoBox>
      </Col>
      <Col span={6}>
        <DemoBox value={80}> col-6</DemoBox>
      </Col>
    </Row>
    <div>align: middle</div>

    <Row align="bottom" style={{ background: '#ddf8f8', marginTop: '24px' }}>
      <Col span={2}>
        <DemoBox value={50}> col-2</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={100}> col-4</DemoBox>
      </Col>
      <Col span={6}>
        <DemoBox value={80}> col-6</DemoBox>
      </Col>
    </Row>
    <div>align: bottom</div>
  </>
);
