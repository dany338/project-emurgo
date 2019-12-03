import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Card = ({ index, image, date, text }) => {
  return (
    <Container>
      <div className="image">
        <img src={image} alt={`Blog ${index}`} />
      </div>
      <div className="date">
        {date}
      </div>
      <div className="text">
        {text}
      </div>
    </Container>
  )
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Card.defaultProps = {
  index: 0,
  image: '',
  date: '',
  text: '',
};

export default Card;
