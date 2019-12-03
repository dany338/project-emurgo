import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Defined Constants */
import { photoEmurgoTest, linksEmurgo } from '../../config/const';

const Nav = props => {
  return (
    <Container>
      <div className="logo">
        <img src={photoEmurgoTest[0]} alt={'Emurgo Test'} />
      </div>
      <div className="links">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={`navs_${index}`}>{linksEmurgo[index]} {(index === 3) && ( <i className="fas fa-angle-down" style={{ verticalAlign: 'middle', color: '#FFFFFF' }}></i> )}</span>
        ))}
      </div>
    </Container>
  )
}

Nav.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Nav.defaultProps = {
  props: {},
};

export default Nav;
