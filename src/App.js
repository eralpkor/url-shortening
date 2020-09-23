import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Main />} />
      </Switch>
    </div>
  );
}

export default App;
