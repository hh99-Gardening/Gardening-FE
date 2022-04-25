import React from 'react';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../Redux/configStore";

import { Login } from '../Pages';



function App() {
  return (
    <React.Fragment>
        <Route path="/" exact component={Login} />
    </React.Fragment>
  );
}


export default App;