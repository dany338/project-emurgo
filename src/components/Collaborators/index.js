import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';

const Collaborators = props => {
  return (
    <Container>
      Collaborators...
    </Container>
  )
};

Collaborators.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Collaborators.defaultProps = {
  props: {},
};

export default Collaborators;
