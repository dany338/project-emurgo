import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Defined Constants */
import { logosCollaborators } from '../../config/const';

const Collaborators = props => {
  return (
    <Container>
      <div className="title">
        {'Our collaborators'}
      </div>
      <div className="logo">
        {Array.from({ length: 4 }, (_, index) => (
          <img key={`collaborators_${index}`} src={logosCollaborators[index]} alt={`logo ${index}`}/>
        ))}
      </div>
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
