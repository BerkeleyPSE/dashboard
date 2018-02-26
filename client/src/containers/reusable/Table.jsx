import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import TableRow from './TableRow';

export default class Table extends Component {
  static propTypes = {
    columns: PropTypes.object,
    tableId: PropTypes.string,
    data: PropTypes.array
  };

  static defaultProps = {
    columns: {},
    tableId: '',
    data: []
  };

  render() {
    let { columns, tableId, data } = this.props;

    const columnHeaders = (
      <Row>
        {Object.values(columns).map((col, index) => {
          return <ColumnHeader key={`${tableId}_col_${index}`}>{col}</ColumnHeader>;
        })}
      </Row>
    );

    const tableRows = data.map((rowData, index) => {
      return (
        <TableRow
          key={`${tableId}_row_${rowData._id}`}
          rowId={rowData._id}
          row={rowData}
          columns={columns}
        />
      );
    });

    return (
      <TableComponent>
        <tbody>
          {columnHeaders}
          {tableRows}
        </tbody>
      </TableComponent>
    );
  }
}

const TableComponent = styled.table`
  border: none;
  border-top: 1px solid #eee;
  width: 100%;
`;

const ColumnHeader = styled.th`
  border: none;
  border-bottom: 3px solid #895fad;
  color: #333;
  font-family: Lato, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  margin: 0;
  padding: 0.25rem 0;
  text-transform: uppercase;
`;

const Row = styled.tr`
  background-color: ${props => props.index % 2 === 0 && '#EEE'};
  margin: 0;
  overflow: scroll;
`;
