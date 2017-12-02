import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import basicStyle from '../../config/basicStyle';

const { rowStyle, colStyle, gutter } = basicStyle;

class FormBuilderStep extends Component {

  render() {
    return (
        <Col md={8} sm={24} xs={24} style={colStyle} key={this.props.component.key}>
          <Card bordered={false}>
            {this.props.component.name}
          </Card>
        </Col>
    );
  }
}

export default FormBuilderStep;
