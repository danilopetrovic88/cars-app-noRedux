import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCars from './pages/AppCars';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Link } from 'react-router-dom';
import AddCar from './components/AddCar';

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
              <li className="nav-item">
                <Link className="nav-link" to={'/add'}>Add car</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path={'/cars'}>
            <AppCars  />
          </Route>
          <Route path={'/add'}>
            <AddCar  />
          </Route>
          <Route path={'/edit/:id'}>
            <AddCar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
