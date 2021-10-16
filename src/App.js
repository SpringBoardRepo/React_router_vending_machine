import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Chpis from "./Chips";
import FreshJuice from "./FreshJuice";
import Soda from "./Soda.";
import Vendingmachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Vendingmachine />
        </Route>
        <Route exact path="/Soda">
          <Soda />
        </Route>
        <Route exact path="/Chips">
          <Chpis />
        </Route>
        <Route exact path="/FreshJuice">
          <FreshJuice />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
