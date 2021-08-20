import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import PlantList from './components/PlantList'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />

        </Route>

        <Route path="/myplants">
          <PlantList />

        </Route>
      </header>
    </div>
  );
}

export default App;
