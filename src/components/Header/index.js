import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Components */
import Nav from '../Nav';
/* Defined Constants */
import { photoEmurgo, photoStartPage } from '../../config/const';

const Header = props => {
  return (
    <Container className="image" photo={photoStartPage[0]}>
      <div className="header-nav">
        <Nav />
      </div>
      <div className="header-content">
        <div className="paragraph">
          {'EMURGO Building'}<br />
          {'a Global Cardano'}
        </div>
        <div className="task">
          {'Test task'}
        </div>
        <div className="logo">
          <span>{'By'}</span>
          <img src={photoEmurgo[0]} alt={'EMURGO'} />
        </div>
        <div className="buttons">
          <div className="item">
            <span>{'learn more'}</span>
          </div>
          <div className="item">
            <span><i className="fas fa-play-circle" style={{ verticalAlign: 'middle', color: '#FFFFFF' }}></i> {'watch the video'}</span>
          </div>
        </div>
      </div>
    </Container>
  )
};

Header.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Header.defaultProps = {
  props: {},
};

export default Header;
