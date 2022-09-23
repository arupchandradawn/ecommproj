// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route>  
          <Header/>
          <HomePage exact path='/'/>
        </Route>

        <Route>  
          <Header/>
          {/* <PLP path='plp' /> */}
        </Route>
      
          {/* Product List Page */}

          {/* Product Detail Page */}
          {/* Cart page */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
