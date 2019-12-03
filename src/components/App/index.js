import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
/* Style Components */
import { GlobalStyle } from './styled';
/* Pages */
import Home from '../../pages/Home';

const App = props => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
};

App.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

App.defaultProps = {
  props: {},
};

export default App;
