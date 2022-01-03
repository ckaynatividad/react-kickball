

import { NavLink, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>kickbball</h1>
      <BrowserRouter>
        <NavLink to="/">home</NavLink>
        <NavLink to="/teams">teams</NavLink>
        <NavLink to="/players">players</NavLink>
        <Switch>
          <Route path="/" exact>
            <h1>home</h1>
          </Route>
          <Route path="/teams">
            <h1>teams</h1>
          
          </Route>
          <Route path="/players">
            <h1>players</h1>
          
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
