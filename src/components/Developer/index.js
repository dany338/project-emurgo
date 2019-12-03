import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Defined Constants */
import { photoDeveloper } from '../../config/const';

const Developer = props => {
  return (
    <Container className="image" photo={photoDeveloper[0]}>
      <h2>{'Developer'}</h2>
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
