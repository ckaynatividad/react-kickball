

import { NavLink, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Player from './views/playerDetail';
import Players from './views/playerList';
import Team from './views/teamDetail';
import Teams from './views/teamList';

function App() {
  return (
    <div className="App">
      <h1>kickballs sdjhfdsksdj</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/team">teams // </NavLink>
          <NavLink to="/player">players</NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route path="/team/:id" component={Team} />
          <Route path="/team" component={Teams}>
          </Route>
          <Route path="/player/:id" component={Player} />
          <Route path="/player" component={Players} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
