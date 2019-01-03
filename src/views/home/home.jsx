import React, { Component } from 'react';
import Counter from '../counter';
import AnimalsList from '../animals';

class Home extends Component {
  render() {
    return (
      <div>
        <Counter />
        <AnimalsList />
      </div>
    );
  }
}

export default Home;
