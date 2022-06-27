import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCars from './components/AppCars';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/cars'}>Cars</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path={'/cars'}>
            <AppCars  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
