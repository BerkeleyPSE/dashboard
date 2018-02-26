import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRow = (props) => {
  const { row, columns, rowId } = props;

  // there should be an onclick that allows the user to edit
  const editCell = (
    <EditCell>
      <i className="fas fa-pencil-alt" />
    </EditCell>
  );

  return (
    <Row>
      {Object.keys(columns).map(col => <Cell key={`${rowId}_${col}`}>{row[col] || ''}</Cell>)}
      {editCell}
    </Row>
  );
};

export default TableRow;

TableRow.propTypes = {
  row: PropTypes.object,
  columns: PropTypes.object,
  rowId: PropTypes.string
};

TableRow.defaultProps = {
  row: {},
  columns: {},
  rowId: ''
};

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

const EditCell = Cell.extend`
  min-width: 15px;
  max-width: 15px;
`;
