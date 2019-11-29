import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';

const Blog = props => {
  return (
    <Container>
      Blog...
    </Container>
  )
};

Blog.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Blog.defaultProps = {
  props: {},
};

export default Blog;
