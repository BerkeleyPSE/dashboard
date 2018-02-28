import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { SectionHeader } from '../styleguide/Headers';

const DataDisplayer = (props) => {
  const {
    pageId, data, dictkey, handleDataClick
  } = props;
  return (
    <DataContainer>
      <SectionHeader>{pageId}</SectionHeader>
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
  handleDataClick: PropTypes.func.isRequired
};

DataDisplayer.defaultProps = {
  data: []
};

export default DataDisplayer;

const DataContainer = styled.div`
  min-width: 200px;
  max-width: 350px;
  min-height: 100%;
  border-right: 2px solid var(--accent);
`;

const DataItem = styled.p`
  color: var(--accent);
  cursor: pointer;
  width: 100%;

  &:hover {
    color: var(--accent-alt);
  }
`;
