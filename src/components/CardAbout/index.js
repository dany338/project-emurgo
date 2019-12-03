import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const CardAbout = ({ index, title, subtitle, paragraph, image }) => {
  return (
    <Container index={index}>
      {((index % 2) === 0) ? (
        <>
          <div className="image">
            <img src={image} alt={`Blog ${index}`} />
          </div>
          <div className="content" index={index}>
            <div className="title">
              {title}
            </div>
            <div className="subtitle">
              {subtitle}
            </div>
            <div className="paragraph">
              {paragraph}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="content" index={index}>
            <div className="title">
              {title}
            </div>
            <div className="subtitle">
              {subtitle}
            </div>
            <div className="paragraph">
              {paragraph}
            </div>
          </div>
          <div className="image">
            <img src={image} alt={`Blog ${index}`} />
          </div>
        </>
      )}
    </Container>
  )
}

CardAbout.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

CardAbout.defaultProps = {
  index: 0,
  title: '',
  subtitle: '',
  paragraph: '',
  image: '',
};

export default CardAbout;
