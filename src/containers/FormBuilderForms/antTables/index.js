import React, { Component } from 'react';
import Tabs, { TabPane } from '../../../components/uielements/tabs';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import TableDemoStyle from './demo.style';
import fakeData from '../fakeData';
import { tableinfos } from './configs';
import * as TableViews from './tableViews/';

const dataList = new fakeData(20);

export default class AntTable extends Component {
  constructor(props) {
    super(props)
  }
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
    return (
      <LayoutContentWrapper>
        <TableDemoStyle className="isoLayoutContent">
        {this.renderTable(tableinfos[0])}
        </TableDemoStyle>
      </LayoutContentWrapper>
    );
  }
}
export { TableViews, tableinfos };
