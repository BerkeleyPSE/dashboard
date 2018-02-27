import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class DataDisplayer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    dictkey: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    handleDataClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    data: []
  };

  render() {
    const { id, data, dictkey, handleDataClick } = this.props;
    return (
      <DataContainer>
        <h1>{id}</h1>
        {data.map((d, index) => {
          return (
            <div key={`${id}_${index}`} onClick={() => handleDataClick(d._id)}>
              {d[dictkey]}
            </div>
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
  border-right: 2px solid var(--purple);
`;
