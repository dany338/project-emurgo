import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';

const App = props => {
  return (
    <Container>
      App...
    </Container>
  )
};

App.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

App.defaultProps = {
  props: {},
};

export default App;
