import { axiosWithAuth } from '../utils/axiosWithAuth';
export const DELETE_PLANT = "DELETE_PLANT";
export const IS_FETCHING = "IS_FETCHING";
export const GET_ERRORS = "GET_ERRORS";
export const SET_LOGGEDIN = "SET_LOGGEDIN";
export const GET_PLANTS = "GET_PLANTS";
export const UPDATE_PLANTS = "UPDATE_PLANTS";

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

export const getPlants = () => (dispatch) => {
    const uid = localStorage.getItem('uid')
    axiosWithAuth().get(`/user/${uid}/plants`)
    .then(res => {
        dispatch({type:GET_PLANTS, payload: res.data.plants})
    })
    .catch(err => {
        dispatch({type:GET_ERRORS, payload: err.response.data.message})
    })
}

export const editPlant = (id, data) => (dispatch) => {
    const uid = localStorage.getItem('uid')
    axiosWithAuth().put(`/user/${uid}/plants/${id}`, data)
    .then(res => {
        dispatch({type:UPDATE_PLANTS, payload: res.data.plants})
    })
    .catch(err => {
        dispatch({type:GET_ERRORS, payload: err.response.data.message})
    })
}
