import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import PlantList from './components/PlantList'
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />

        </Route>

        <PrivateRoute path="/myplants" component={PlantList} />

        <Route exact path="/">
            <h2 className="welcome-page">Welcome to WaterMyPlants!</h2>
            <h4 className="welcome-page">Please login to view your plants.</h4>
        </Route>
      </header>
    </div>
  );
}

export default App;
