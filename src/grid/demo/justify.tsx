/**
 * title: 布局
 * description: 子元素根据不同的值 start、center、end、space-between、space-around 和 space-evenly，分别定义其在父节点里面的排版方式。
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
  <>
    <Row justify="space-between" style={{ background: '#ddf8f8' }}>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
    </Row>
    <div>space-between</div>
    <Row
      justify="space-around"
      style={{ background: '#ddf8f8', marginTop: '24px' }}
    >
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
    </Row>
    <div>space-around</div>
    <Row justify="start" style={{ background: '#ddf8f8', marginTop: '24px' }}>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
    </Row>
    <div>start</div>
    <Row justify="center" style={{ background: '#ddf8f8', marginTop: '24px' }}>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
    </Row>
    <div>center</div>
    <Row justify="end" style={{ background: '#ddf8f8', marginTop: '24px' }}>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
      <Col span={3}>
        <DemoBox>col-3</DemoBox>
      </Col>
    </Row>
    <div>end</div>
  </>
);
