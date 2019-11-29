import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Card = props => {
  return (
    <Container>
      Card...
    </Container>
  )
}

Card.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Card.defaultProps = {
  props: {},
};

export default Card;
