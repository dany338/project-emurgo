import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Defined Constants */
import { cardsAbout } from '../../config/const';
/* Components */
import CardAbout from '../CardAbout';

const About = props => {
  return (
    <Container id="about-content">
      <div className="title">
        {'About'}
      </div>
      <div>
        {cardsAbout.map((about, index) => (
          <CardAbout key={`about_${index}`} index={index} {...about} />
        ))}
      </div>
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
