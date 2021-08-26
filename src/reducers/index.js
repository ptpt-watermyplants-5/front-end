import { DELETE_PLANT, IS_FETCHING, GET_ERRORS, SET_LOGGEDIN } from '../actions'
import {dummyPlants} from '../components/dummyPlants'

export const initialState = {

    loggedIn: false,
    plantsList: dummyPlants,
    is_fetching: false,
    errors: null,


}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(DELETE_PLANT):
            return({
                ...state,
                plantsList: state.plantsList.filter(plant => plant.id !== action.payload)
            });
        case IS_FETCHING:
            return({
                ...state,
                is_fetching: action.payload
            });
        case GET_ERRORS:
            return({
                ...state,
                errors: action.payload
            });
        case SET_LOGGEDIN:
            return({
                ...state,
                loggedIn: action.payload
            })
        default:
            return state
    }
}