import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Table from './Components/Table/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";  //React router para crear los enlaces y direccionamiento a: Hoy, Esta semana, Septiembre.

function App() {
  return (
    <Router>
      <Switch >
        <Route path="/hoy">
            <Header />
            <Main />
            <Table />
        </Route>

        <Route path="/semana">
            <Header />
            <Main />
            <Table />
        </Route>

        <Route path="/">
            <Header />
            <Main />
            <Table />
        </Route>
      </Switch>

    </Router>
    
  );
}

export default App;
