// Import Components
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";

import { Switch, Route } from "react-router-dom";
import DetailBook from "./pages/DetailBook";
import ReadBook from "./pages/ReadBook";
import Transaction from "./pages/Transactions";

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
        <Route path="/Detail">
          <DetailBook />
        </Route>
        <Route path="/Read">
          <ReadBook />
        </Route>
        <Route path="/Transaction">
          <Transaction />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
