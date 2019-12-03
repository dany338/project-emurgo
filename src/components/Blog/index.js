import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import Card from '../Card';
/* Defined Constants */
import { cardsBlog } from '../../config/const';

const Blog = props => {
  return (
    <Container>
      <div className="title">
        {'Blog'}
      </div>
      <div className="content">
        {cardsBlog.map((blog, index) => (
          <Card key={`blog_${index}`} index={index} {...blog} />
        ))}
      </div>
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
