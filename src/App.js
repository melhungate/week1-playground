import React, { Component } from 'react';

import Greeting from './Greeting';
import PetList from './PetList';
import Counter from './Counter';
import animals from './animals';

class App extends Component {

  render() {
    return (
      <div>
        <Greeting />
        <PetList animals={animals}/>
        <Counter />
      </div>
    )
  }
}

export default App;
