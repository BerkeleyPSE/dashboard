import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { SectionHeader } from '../styleguide/Headers';
import SearchInput from './Inputs/SearchInput';
import AddNewButton from './Buttons/AddNewButton';

const DataDisplayer = (props) => {
  const {
    pageId,
    data,
    dictkey,
    handleDataClick,
    searchValue,
    handleSearchChange,
    generateNew
  } = props;
  return (
    <DataContainer>
      <SectionHeader>{pageId}</SectionHeader>
      <AddNewButton onClick={generateNew} />
      <SearchInput value={searchValue} handleChange={handleSearchChange} />
      {data.map((d, index) => (
        <DataItem key={`${pageId}_${d._id}`} onClick={() => handleDataClick(d._id)}>
          {d[dictkey]}
        </DataItem>
      ))}
    </DataContainer>
  );
};

DataDisplayer.propTypes = {
  pageId: PropTypes.string.isRequired,
  dictkey: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  handleDataClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  generateNew: PropTypes.func.isRequired
};

DataDisplayer.defaultProps = {
  data: []
};

export default DataDisplayer;

const DataContainer = styled.div`
  border-right: 2px solid var(--accent);
  min-width: 200px;
  max-width: 350px;
  min-height: 100%;
  padding: 0 10px 0 0;
`;

const DataItem = styled.p`
  color: var(--accent);
  cursor: pointer;
  width: 100%;
  transition: all 0.25s;

  &:hover {
    color: var(--accent-alt);
  }
`;
