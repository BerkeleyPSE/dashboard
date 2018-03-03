import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = props => <ButtonContainer {...props}>{props.children}</ButtonContainer>;

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired,
  colorStyle: PropTypes.string,
  size: PropTypes.string,
  noMargin: PropTypes.bool
};

Button.defaultProps = {
  colorStyle: 'main',
  size: 'medium',
  noMargin: false
};

const colorStyles = {
  main: {
    bgColor: 'var(--white)',
    border: '2px solid var(--accent)',
    color: 'var(--accent)'
  },
  alt: {
    bgColor: 'var(--accent)',
    border: '2px solid var(--accent)',
    color: 'var(--white)'
  },
  save: {
    bgColor: 'var(--green)',
    border: 'var(--green)',
    color: 'var(--white)'
  },
  reject: {
    bgColor: 'var(--red)',
    border: 'var(--red)',
    color: 'var(--white)'
  }
};

const sizeStyle = {
  small: {
    fontSize: '0.875rem',
    margin: '0 5px',
    padding: '3px 5px'
  },
  medium: {
    fontSize: '1rem',
    margin: '0 10px',
    padding: '6px 10px'
  },
  large: {
    fontSize: '1.125rem',
    margin: '0 15px',
    padding: '9px 15px'
  }
};

const ButtonContainer = styled.button`
  background-color: ${props => colorStyles[props.colorStyle].bgColor};
  border: ${props => colorStyles[props.colorStyle].border};
  color: ${props => colorStyles[props.colorStyle].color};
  cursor: pointer;
  font-size: ${props => sizeStyle[props.size].fontSize};
  margin: ${props => (props.noMargin ? '0' : sizeStyle[props.size].margin)};
  padding: ${props => sizeStyle[props.size].padding};
  outline: none;
  text-transform: uppercase;
  transition: all 0.25s;

  &:hover {
    background-color: ${props => colorStyles[props.colorStyle].color};
    color: ${props => colorStyles[props.colorStyle].bgColor};
  }
`;
