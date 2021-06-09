import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Dashboard } from './pages/Dashboard';
import { Menu } from './pages/Menu';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/restaurant/:id" component={Menu} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
