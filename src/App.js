import './App.css';
import { connect } from 'react-redux';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import PlantList from './components/PlantList'
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute';
import PlantForm from './components/PlantForm';
import PlantFormEdit from './components/PlantFormEdit';
import LoadingPage from './components/LoadingPage';
import { isFetching, setErrors, setLoggedIn, getPlants } from './actions'

function App(props) {

  if (localStorage.getItem('token')) {
    props.setLoggedIn(true);
    props.getPlants(localStorage.getItem('uid'))
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar errors={props.setErrors} isValid={props.loggedIn} />
        
        <Route path="/login" component={ () => 
          props.is_fetching === false || undefined
          ? <Login isFetching={props.isFetching} errors={props.setErrors} showErrors={props.errors} />
          : <LoadingPage />
        } />

        <Route path="/signup" component={() => 
          props.is_fetching === false || undefined
          ? <SignUp isFetching={props.isFetching} errors={props.setErrors} showErrors={props.errors} />
          : <LoadingPage />
        } />


        <PrivateRoute exact path="/myplants/:id" component={PlantList} />

        <PrivateRoute exact path="/myplants/:id/plants" component={PlantForm} />
        <PrivateRoute exact path="/myplants/:id/plants/:id" component={PlantFormEdit} />

        <Route exact path="/">
            <h2 className="welcome-page">Welcome to WaterMyPlants!</h2>
            <h4 className="welcome-page">Please login to view your plants.</h4>
        </Route>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return({
      loggedIn: state.loggedIn,
      is_fetching: state.is_fetching,
      plantsList: state.plantsList,
      errors: state.errors,
  })
}

export default connect(mapStateToProps,{isFetching, setErrors, setLoggedIn, getPlants})(App);
