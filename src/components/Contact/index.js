import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Defined Constants */
import { photoContactUs } from '../../config/const';

const Contact = props => {
  return (
    <Container id="contact-content" photo={photoContactUs[0]}>
      <div className="title">
        {'Contact us'}
      </div>
      <div className="contact-us">
        <div className="form-inputs">
          <div className="text-paragraph">
            {'Ask us enything! We`ll get back to you within 24 - 48 hours'}
          </div>
          <div className="text-input">
            <span>{'Name'}</span>
          </div>
          <div className="text-input">
            <span>{'E-mail'}</span>
          </div>
          <div className="text-paragraph">
            {'How can we help you?'}
          </div>
          <div className="text-area">
            <span>{'Your message'}</span>
          </div>
          <div className="form-button">
            <span>{'Learn more'}</span>
          </div>
        </div>
        <div className="image-contact">
          <h2>{'Contact'}</h2>
        </div>
      </div>
    </Container>
  )
}

Contact.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Contact.defaultProps = {
  props: {},
};

export default Contact;
