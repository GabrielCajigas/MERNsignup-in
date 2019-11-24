import React, { Component } from 'react';
import './App.css';
import Login from './Login';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <h1 className="display-6"> Pet Shelter</h1> 
        <div className="container-fluid text-center">
        <Route exact path="/" component={Login} />
        {/* <Route path="/new" component={NewPet} />
        <Route exact path="/pet/:_id" component={OnePet} /> 
        <Route path="/pet/:_id/edit" component={EditPet} />  */}
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
