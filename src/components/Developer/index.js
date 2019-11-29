import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Developer = props => {
  return (
    <Container>
      Developer...
    </Container>
  )
};

Developer.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Developer.defaultProps = {
  props: {},
};

export default Developer;
