import { Col, GridContainer, Row } from 'nova-ui';
import React from 'react';

export default () => (
  <GridContainer style={{ background: '#ddf8f8' }}>
    <Row justify="space-between" align="middle">
      <Col span={2} xs={4}>
        <div
          style={{
            background: 'var(--nova-primary1)',
            textAlign: 'center',
          }}
        >
          col-2/xs-4
        </div>
      </Col>
      <Col span={4} xs={{ span: 4 }}>
        <div
          style={{ background: 'var(--nova-primary1)', textAlign: 'center' }}
        >
          col-4/xs-4
        </div>
      </Col>
      <Col span={6} xs={4}>
        <div
          style={{ background: 'var(--nova-primary1)', textAlign: 'center' }}
        >
          col-6/xs-4
        </div>
      </Col>
    </Row>
  </GridContainer>
);
