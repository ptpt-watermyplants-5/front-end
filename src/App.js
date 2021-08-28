import './App.css';
import { useEffect } from 'react';
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
import UserFormEdit from './components/UserFormEdit';
import { isFetching, setErrors, setLoggedIn, getPlants, getUser } from './actions'

function App(props) {
const { getPlants, setLoggedIn, getUser } = props;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
      getPlants(localStorage.getItem('uid'));
      getUser(localStorage.getItem('uid'));
    }
  }, [getUser, getPlants, setLoggedIn]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar errors={props.setErrors} loggedIn={setLoggedIn} isValid={props.loggedIn} user={props.user.username} />
        
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
        <PrivateRoute exact path="/myplants/:uid/plants/:id" component={PlantFormEdit} />
        <PrivateRoute exact path="/user/:id" component={() => {
          return <UserFormEdit errors={props.errors} />
        }} />

        <Route exact path="/">
            <h2 className="welcome-page">Welcome {props.loggedIn ? `${props.user.username},` : undefined} to WaterMyPlants!</h2>
            { props.loggedIn ? undefined : <h4 className="welcome-page">Please login to view your plants.</h4>}
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
      user: state.user,
  })
}

export default connect(mapStateToProps,{isFetching, setErrors, setLoggedIn, getPlants, getUser})(App);
