// Import Components
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";

import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/Subscribe">
          <Subscribe />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
