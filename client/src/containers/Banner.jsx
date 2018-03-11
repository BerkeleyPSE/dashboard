import React, { Component } from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { RowContainer } from './styleguide/Containers';

export default class Banner extends Component {
  static propTypes = {
    inEditMode: PropTypes.bool.isRequired
  };

  state = {
    show: true
  };

  componentWillReceiveProps(nextProps) {
    const { inEditMode } = this.props;
    if (inEditMode !== nextProps.inEditMode) this.setState({ show: true });
  }

  render() {
    const { inEditMode } = this.props;
    const { show } = this.state;
    return (
      show && (
        <BannerContainer inEditMode={inEditMode} justifyContent="space-around">
          {inEditMode ? (
            <Text>You are in EDIT MODE. Changes you make are live.</Text>
          ) : (
            <Text>You are in SAFE MODE. You cannot make changes.</Text>
          )}
          <CloseIcon onClick={() => this.setState({ show: false })}>CLOSE</CloseIcon>
        </BannerContainer>
      )
    );
  }
}

const BannerContainer = RowContainer.extend`
  background-color: ${props => (props.inEditMode ? 'var(--red)' : 'var(--green)')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-wrap: wrap;
  max-width: 100%;
  padding: 5px 0;
`;

const Text = styled.p`
  color: var(--main);
  font-size: 16px;
  margin: 8px 0;
`;

const CloseIcon = styled.div`
  background-color: var(--white);
  border: 2px solid var(--main);
  color: var(--main);
  cursor: pointer;
  font-size: 12px;
  padding: 5px 10px;
  transition: all 0.25s;

  &:hover {
    background-color: var(--main);
    color: var(--white);
  }
`;
