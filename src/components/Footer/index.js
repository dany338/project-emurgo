import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Defined Constants */
import { logosSocial } from '../../config/const';
/* Components */
import Nav from '../Nav';
/* Defined Constants */
import { photoStartPage } from '../../config/const';

const Footer = props => {
  return (
    <Container className="image" photo={photoStartPage[0]}>
      <div className="footer-nav">
        <Nav />
      </div>
      <div className="footer-icons">
        <div className="title">
          {'All rights reserved | EMURGOTEST'}
        </div>
        <div className="logo">
          {Array.from({ length: 6 }, (_, index) => (
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
