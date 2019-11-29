import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';

const About = props => {
  return (
    <Container>
      About...
    </Container>
  )
}

About.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

About.defaultProps = {
  props: {},
};

export default About;
