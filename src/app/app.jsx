
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import PageFade from '../components/PageFade';
import Home from '../views/home';

const App = ({ location }) => (
  <PageFade locationKey={location.pathname}>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
    </Switch>
  </PageFade>
);

App.propTypes = {
  location: PropTypes.object.isRequired
};

export default App;