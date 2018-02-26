import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    console.log(handleDataClick);
    return (
      <div>
        <h1>{id}</h1>
        {data.map((d, index) => {
          return (
            <div key={`${id}_${index}`} onClick={() => this.props.handleDataClick(d._id)}>
              {d[dictkey]}
            </div>
          );
        })}
      </div>
    );
  }
}
