import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import { DateCell, ImageCell, LinkCell, TextCell } from './helperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: "Received On",
    key: 'received_at',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'receivedAt')
  },
  {
    title: "Photo",
    key: 'avatar',
    width: '1%',
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'avatar')
  },
  {
    title: "Pet's Name",
    key: 'pet_name',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'petName')
  },
  {
    title: "Pet's ID",
    key: 'pet_id',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'petID')
  },
  {
    title: "Applicant's Name",
    key: 'name',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'name')
  },
  {
    title: "Applicant's Address",
    key: 'city',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'address')
  },
  {
    title: "Applicant's E-Mail",
    key: 'email',
    width: 200,
    render: object => renderCell(object, 'LinkCell', 'email')
  },
  {
    title: "Applicant's Phone Number",
    key: 'phoneNumber',
    width: 200,
    render: object => renderCell(object, 'LinkCell', 'phoneNumber')
  },

];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true }
];
const editColumns = [
  { ...columns[0], width: 300, sorter: true },
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300, sorter: true },
  columns[3],
  columns[4]
];
const groupColumns = [
  columns[0],
  {
    title: 'Name',
    children: [columns[1], columns[2]]
  },
  {
    title: 'Address',
    children: [columns[3], columns[4]]
  }
];
const tableinfos = [
  {
    title: 'Simple Table',
    value: 'simple',
    columns: clone(columns)
  },
  {
    title: 'Sortable Table',
    value: 'sortView',
    columns: clone(columns)
  },
  {
    title: 'Search Text',
    value: 'filterView',
    columns: clone(columns)
  },
  {
    title: 'Editable View',
    value: 'editView',
    columns: clone(columns)
  },
  {
    title: 'Grouping View',
    value: 'groupView',
    columns: clone(columns)
  },
  {
    title: 'Customized View',
    value: 'customizedView',
    columns: clone(columns)
  }
];
export { columns, tableinfos };
