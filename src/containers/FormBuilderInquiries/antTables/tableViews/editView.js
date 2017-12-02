import React, { Component } from 'react';
import clone from 'clone';
import TableWrapper from '../antTable.style';
import { EditableCell, DeleteCell } from '../helperCells';
import notification from '../../../../components/notification';

export default class EditView extends Component {
  constructor(props) {
    super(props);
    this.onCellChange = this.onCellChange.bind(this);
    this.onDeleteCell = this.onDeleteCell.bind(this);
    this.state = {
      columns: this.createcolumns(clone(this.props.tableInfo.columns)),
      dataList: this.props.dataList.getAll(),
    };
  }
  createcolumns(columns) {
    // const editColumnRender = (text, record, index) =>
    //   <EditableCell
    //     index={index}
    //     columnsKey={columns[4].key}
    //     value={text[columns[4].key]}
    //     onChange={this.onCellChange}
    //   />;
    // columns[4].render = editColumnRender;
    const deleteColumn = {
      title: 'ACTIONS',
      dataIndex: 'operation',
      render: (text, record, index) =>
        <DeleteCell index={index} onDeleteCell={this.onDeleteCell} />,
    };
    // columns.push(deleteColumn);
    columns.splice(0, 0, deleteColumn); // push to beginning
    return columns;
  }
  onCellChange(value, columnsKey, index) {
    const { dataList } = this.state;
    dataList[index][columnsKey] = value;
    this.setState({ dataList });
  }
  onDeleteCell = index => {
    const { dataList } = this.state;
    dataList.splice(index, 1);
    this.setState({ dataList });
  };
  onCellAdd = () => {
    const { dataList } = this.state;
    const cellToAdd = {...dataList[19]};
    cellToAdd.id = dataList.length + 2;
    cellToAdd.key = dataList.length + 2;
    const nextList = [cellToAdd].concat(dataList)
    console.log(dataList, cellToAdd, nextList)
    this.setState({ dataList: nextList });
  };
  render() {
    window.addInquiry = () => {
      this.onCellAdd();
      window.addMail();
      notification('success', `new message`, 'Inquiry Added');
    };
    const { columns, dataList } = this.state;
    console.log("RENDER INQUIRIES", dataList.length)
    return (
      <div>
        <TableWrapper
          columns={columns}
          dataSource={dataList}
          className="isoEditableTable"
        />
      </div>

    );
  }
}
