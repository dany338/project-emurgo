import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import About from '../About';
import Developer from '../Developer';
import Blog from '../Blog';
import Contact from '../Contact';

const Content = props => {
  return (
    <Container>
      <About />
      <Developer />
      <Blog />
      <Contact />
    </Container>
  )
}

Content.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Content.defaultProps = {
  props: {},
};

export default Content;
