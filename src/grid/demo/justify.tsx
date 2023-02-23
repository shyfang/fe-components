import { Col, Row } from 'nova-ui';
import React from 'react';

export default () => (
  <Row justify="space-between" align="middle" style={{ background: '#ddf8f8' }}>
    <Col span={2} xs={4}>
      <div
        style={{
          background: 'var(--nova-primary1)',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        col-2/xs-4
      </div>
    </Col>
    <Col span={2} xs={{ span: 4 }}>
      <div style={{ background: 'var(--nova-primary1)', textAlign: 'center' }}>
        col-2/xs-4
      </div>
    </Col>
    <Col span={2} xs={4}>
      <div style={{ background: 'var(--nova-primary1)', textAlign: 'center' }}>
        col-2/xs-4
      </div>
    </Col>
  </Row>
);
