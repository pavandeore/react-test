import React from 'react';

import Reactnode from './components/Reactnode';
import Reactphp from './components/Reactphp';

import { Link, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div>
        <h2>Get the data </h2>
        <Link to="/react-php" > from zend - mysql </Link> <br />
        <Link to="/react-node" > from node - mysql</Link>

        <Route path="/react-node"><Reactnode /></Route>
        <Route path="/react-php"><Reactphp /></Route>

      </div>
    )
  }
}

export default  App;