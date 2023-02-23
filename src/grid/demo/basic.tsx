import { Col, GridContainer, Row } from 'nova-ui';
import React from 'react';

export default () => (
  <GridContainer>
    <Row>
      <Col span={2}>col-2</Col>
      <Col span={4}>col-4</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </GridContainer>
);
