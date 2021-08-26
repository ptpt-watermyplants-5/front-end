import { axiosWithAuth } from '../utils/axiosWithAuth';
export const DELETE_PLANT = "DELETE_PLANT";
export const IS_FETCHING = "IS_FETCHING";
export const GET_ERRORS = "GET_ERRORS";
export const SET_LOGGEDIN = "SET_LOGGEDIN";
export const GET_PLANTS = "GET_PLANTS";

export const deletePlant = (id) => {
    return({type:DELETE_PLANT, payload: id})
};

export const isFetching = (data) => {
    return({type:IS_FETCHING, payload: data})
};

export const setErrors = (data) => {
    return({type:GET_ERRORS, payload: data})
};

export const setLoggedIn = (data) => {
    return({type:SET_LOGGEDIN, payload: data})
};

export const getPlants = (id) => (dispatch) => {
    dispatch(() => {
        axiosWithAuth().get(`/user/${id}/plants`)
        .then(res => {
            console.log('getPlants response: ', res.data.plants)
            return({type:GET_PLANTS, payload: res.data.plants})
        })
        .catch(err => {
            return({type:GET_ERRORS, payload: err.response})
        })
    })
}
