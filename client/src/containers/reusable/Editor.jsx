import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Editor extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };

  render() {
    let { data } = this.props;
    return (
      <div>
        <h1>Editor Component</h1>
        <p>{JSON.stringify(data)}</p>
      </div>
    );
  }
}
