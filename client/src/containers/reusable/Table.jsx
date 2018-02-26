import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

export default class Table extends Component {
  static propTypes = {
    columns: PropTypes.object,
    id: PropTypes.string,
    data: PropTypes.array
  };

  static defaultProps = {
    columns: {},
    id: '',
    data: []
  };

  render() {
    let { columns, id, data } = this.props;

    const columnHeaders = (
      <Row>
        {Object.values(columns).map((col, index) => {
          return <ColumnHeader key={`${id}_col_${index}`}>{col}</ColumnHeader>;
        })}
      </Row>
    );

    const tableRows = data.map((person, index) => {
      return (
        <Row key={`${id}_row_${index}`} index={index}>
          {Object.keys(columns).map((col, index) => {
            return <Cell key={`${id}_${person.name}_${col}`}>{person[col] || ''}</Cell>;
          })}
        </Row>
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

const Cell = styled.td`
  font-size: 0.9rem;
  letter-spacing: 0.0125rem;
  margin: 0;
  padding: 0.5rem 0.25rem;
  min-width: 150px;
`;
