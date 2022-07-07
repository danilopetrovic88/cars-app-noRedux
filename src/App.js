import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCars from './pages/AppCars';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Link } from 'react-router-dom';
import AddCar from './components/AddCar';
import AppLogin from './components/AppLogin';
import AppRegister from './components/AppRegister';
import { useState } from 'react';
import authService from './services/AuthService';
import SingleCar from './components/SingleCar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  const [authenticated, setAuthincated] = useState(!!localStorage.getItem('token'))

  const handleLogout = () => {
    authService.logout();
    setAuthincated(false);
  }

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
              { !authenticated &&
              <li className="nav-item">
                <Link className="nav-link" to={'/login'}>Login</Link>
              </li> 
              }

              { !authenticated &&
              <li className="nav-item">
                <Link className="nav-link" to={'/register'}>Register</Link>
              </li> 
              }

              { authenticated &&
              <li className="nav-item">
                <p onClick={handleLogout} className='nav-link'>Logout</p>
              </li>
              }
            </ul>
          </div>
        </nav>
        <Switch>
          <PrivateRoute exact path={'/cars'}>
            <AppCars  />
          </PrivateRoute>
          <PrivateRoute exact path={'/add'}>
            <AddCar  />
          </PrivateRoute>
          <PrivateRoute exact path={'/edit/:id'}>
            <AddCar />
          </PrivateRoute>
          <PublicRoute exact path={'/login'}>
            <AppLogin onLogin={() => setAuthincated(true)} />
          </PublicRoute>
          <PublicRoute exact path={'/register'}>
            <AppRegister onRegister={() => setAuthincated(true)} />
          </PublicRoute>
          <Route exact path={'/cars/:id'}>
            <SingleCar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
