// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/'>  
          <Header/>
          <HomePage/>
        </Route>

        <Route path='/plp'>  
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
