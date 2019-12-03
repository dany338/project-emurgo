import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Home = props => {
  return (
    <ErrorBoundary>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </ErrorBoundary>
  )
};

Home.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Home.defaultProps = {
  props: {},
};

export default Home;
