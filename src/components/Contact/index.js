import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';

const Contact = props => {
  return (
    <Container>
      Contact...
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
