import React, { Component } from 'react';
import basicStyle from '../../config/basicStyle';
import { Row, Col, Card} from 'antd';
import FormBuilderComponent from './formBuilderComponent';

const { rowStyle, colStyle, gutter } = basicStyle;
const formComponents = [
  {
    key: '1',
    id: '',
    name: 'Header',
    icon: '',
    module: ''
  }, {
    key: '2',
    id: '',
    name: 'Long Answer',
    icon: '',
  }, {
    key: '3',
    id: '',
    name: 'Short Answer',
    icon: '',
  }, {
    key: '4',
    id: '',
    name: 'Multiple Choice',
    icon: '',
  }, {
    key: '5',
    id: '',
    name: 'Muli-Select',
    icon: '',
  }
]


class FormBuilderComponents extends Component {
  render() {
    return (
        <Row style={rowStyle} gutter={gutter} justify="start">

      {/*
          {formComponents.map((x, i) =>
          <FormBuilderComponent component={x} />
          )}
       */}
      {formComponents.map((x, i) =>
                          <Col md={8} sm={24} xs={24} style={colStyle}>
                          <Card bordered={false}>
                          {x.name}
                          </Card>
                          </Col>
                         )}

      </Row>
    )
  }
}

export default FormBuilderComponents;
