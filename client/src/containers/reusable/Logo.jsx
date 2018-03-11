import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoImage = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
`;

LogoImage.propTypes = {
  size: PropTypes.string
};

const Logo = props => (
  <LogoImage
    src="images/pse_zx_logo.png"
    alt="Pi Sigma Epsilon logo"
    width={props.size}
    height={props.size}
  />
);

Logo.propTypes = {
  size: PropTypes.string
};

Logo.defaultProps = {
  size: '300px'
};

export default Logo;
