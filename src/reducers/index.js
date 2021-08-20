import { DELETE_PLANT } from '../actions'
import {dummyPlants} from '../components/dummyPlants'

export const initialState = {

    plantsList: dummyPlants,


}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(DELETE_PLANT):
            return({
                ...state,
                plantsList: state.plantsList.filter(plant => plant.id !== action.payload)
            })
        default:
            return state
    }
}