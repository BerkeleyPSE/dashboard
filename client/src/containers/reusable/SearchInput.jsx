import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// local components
import { RowContainer } from '../styleguide/Containers';

const SearchInput = props => (
  <InputContainer>
    <Input
      value={props.value}
      onChange={e => props.handleChange(e.target.value)}
      innerRef={(input) => {
        this.searchInput = input;
      }}
      placeholder="Search..."
    />
    <ClearButton onClick={() => props.handleChange('')}>
      <i className="fas fa-times" aria-hidden="true" />
    </ClearButton>
  </InputContainer>
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchInput;

const InputContainer = RowContainer.extend`
  margin: 10px 0;
  height: 25px;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--accent);
  font-size: 1rem;
  height: 100%;
  width: 90%;
  outline: none;
`;

const ClearButton = RowContainer.extend`
  color: var(--main);
  cursor: pointer;
  margin: 0 5px;
  width: 10%;
  height: 100%;

  &:hover {
    color: var(--accent-alt);
  }
`;
