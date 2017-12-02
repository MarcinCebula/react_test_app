import React, { Component } from 'react';
import { Breadcrumb, Icon, Form, Select, Col, Row, Box, DatePicker, Input } from 'antd';
import Tabs, { TabPane } from '../../../components/uielements/tabs';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import TableDemoStyle from './demo.style';
import fakeData from '../fakeData';
import { tableinfos } from './configs';
import { SearchBox } from 'react-instantsearch/dom';
import * as TableViews from './tableViews/';

const RangePicker = DatePicker.RangePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const dataList = new fakeData(20);

export default class AntTable extends Component {
  renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'sortView':
        Component = TableViews.SortView;
        break;
      case 'filterView':
        Component = TableViews.FilterView;
        break;
      case 'editView':
        Component = TableViews.EditView;
        break;
      case 'groupView':
        Component = TableViews.GroupView;
        break;
      case 'customizedView':
        Component = TableViews.CustomizedView;
        break;
      default:
        Component = TableViews.EditView;
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };



    return (

      <div>
        <Row gutter={24}  style={{padding: 10}}>
          <Col span={24}>
            <div style={{padding: '15px'}}>
              <Breadcrumb>
                <Breadcrumb.Item href="/dashboard">
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/dashboard/forms">
                  <Icon type="user" />
                  <span>Application List</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>

        <Col span={24} style={{marginTop: 1, backgroundColor: 'white', padding: 20}}>
          <Row gutter={24}>
            <Form layout="inline">
              <FormItem>
                <Input prefix={<Icon type="search" style={{ fontSize: 13 }} />} placeholder="Search Applications" style={{ width: 280 }}/>
              </FormItem>

              <FormItem
                style={{float: 'right'}}
                label="Order">
                <Select placeholder="Sort Column" defaultValue="received_on" style={{width: 200}}>
                  <Option value="received_on">Received on Date</Option>
                  <Option value="pets_name">Pet's name</Option>
                  <Option value="pets_id">Pet's ID</Option>
                  <Option value="applicants_name">Applicant's Name</Option>
                  <Option value="applicants_email">Applicant's Email</Option>
                  <Option value="applicants_phonenumber">Applicant's Phone Number</Option>
                </Select>
                <Select placeholder="Sort Order" defaultValue="asc" style={{width: 80}}>
                  <Option value="asc">ASC</Option>
                  <Option value="desc">DESC</Option>
                </Select>
              </FormItem>
            </Form>
          </Row>
        </Col>

        <LayoutContentWrapper style={{paddingTop: 10}}>
          {this.renderTable(tableinfos[0])}
        </LayoutContentWrapper>
      </div>
    );
  }
}
export { TableViews, tableinfos, dataList };
