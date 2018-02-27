import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { SectionHeader } from '../styleguide/Headers';

export default class DataDisplayer extends Component {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    dictkey: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    handleDataClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    data: []
  };

  render() {
    const { pageId, data, dictkey, handleDataClick } = this.props;
    return (
      <DataContainer>
        <SectionHeader>{pageId}</SectionHeader>
        {data.map((d, index) => {
          return (
            <DataItem key={`${pageId}_${index}`} onClick={() => handleDataClick(d._id)}>
              {d[dictkey]}
            </DataItem>
          );
        })}
      </DataContainer>
    );
  }
}

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
    color: ;
  }
`;
