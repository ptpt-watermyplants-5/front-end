import { DELETE_PLANT, IS_FETCHING, GET_ERRORS, SET_LOGGEDIN, GET_PLANTS, UPDATE_PLANTS, GET_USER, UPDATE_USER, ADD_PLANT } from '../actions'

export const initialState = {

    user: {},
    loggedIn: false,
    plantsList: [],
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
            });
        case (GET_PLANTS):
            return({
                ...state,
                plantsList: action.payload
            });
        case UPDATE_PLANTS:
            return({
                ...state,
                plantsList: action.payload
            });
        case GET_USER:
            return({
                ...state,
                user: action.payload
            })
        case UPDATE_USER:
            return({
                ...state,
                user: action.payload
            })
        case ADD_PLANT:
            return({
                ...state,
                plantsList: action.payload
            })
        default:
            return state
    }
}