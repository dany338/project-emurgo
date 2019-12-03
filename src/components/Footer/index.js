import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Defined Constants */
import { logosSocial } from '../../config/const';
/* Components */
import Nav from '../Nav';

const Footer = props => {
  return (
    <Container>
      <Nav />
      <div className="footer-icons">
        <div className="title">
          {'All rights reserved | EMURGOTEST'}
        </div>
        <div className="logo">
          {Array.from({ length: 4 }, (_, index) => (
              <img key={`social_${index}`}  src={logosSocial[index]} alt={`logo ${index}`}/>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

Footer.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Footer.defaultProps = {
  props: {},
};

export default Footer;
