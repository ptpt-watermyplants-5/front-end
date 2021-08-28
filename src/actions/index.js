import { axiosWithAuth } from '../utils/axiosWithAuth';
export const DELETE_PLANT = "DELETE_PLANT";
export const IS_FETCHING = "IS_FETCHING";
export const GET_ERRORS = "GET_ERRORS";
export const SET_LOGGEDIN = "SET_LOGGEDIN";
export const GET_PLANTS = "GET_PLANTS";
export const UPDATE_PLANTS = "UPDATE_PLANTS";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER = "GET_USER";
export const ADD_PLANT = "ADD_PLANT";

export const deletePlant = (plantId) => (dispatch) => {
    const uid = localStorage.getItem('uid')

    axiosWithAuth().delete(`/user/${uid}/plants/${plantId}`)
        .then(res => {
            dispatch({type:DELETE_PLANT, payload: plantId})
        })
        .catch(err => {
            dispatch({type:GET_ERRORS, payload: err.response.data.message})
        })
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

export const getPlants = (uid) => (dispatch) => {
    axiosWithAuth().get(`/user/${uid}/plants`)
    .then(res => {
        dispatch({type:GET_PLANTS, payload: res.data.plants})
    })
    .catch(err => {
        dispatch({type:GET_ERRORS, payload: err.response.data.message})
    })
};

export const editPlant = (id, data) => (dispatch) => {
    const uid = localStorage.getItem('uid')
    axiosWithAuth().put(`/user/${uid}/plants/${id}`, data)
    .then(res => {
        dispatch({type:UPDATE_PLANTS, payload: res.data.plants})
    })
    .catch(err => {
        dispatch({type:GET_ERRORS, payload: err.response.data.message})
    })
};

export const getUser = (uid) => (dispatch) => {
    axiosWithAuth().get(`/user/${uid}`)
    .then(res => {
        dispatch({type:GET_USER, payload: res.data})
    })
    .catch(err => {
        dispatch({type:GET_ERRORS, payload: err.response.data.message})
    })
};

export const editUser = (uid,data) => (dispatch) => {
    dispatch({type:GET_ERRORS, payload: null});
    axiosWithAuth().put(`/user/${uid}`, data)
    .then(res => {
        dispatch({type: UPDATE_USER, payload: res.data});
        window.location.href = `/myplants/${uid}`;
    })
    .catch(err => {
        dispatch({type:GET_ERRORS, payload: err.response.data.message})
    })
}

export const addPlant = (newPlant) => (dispatch) => {
    const uid = localStorage.getItem('uid')
    axiosWithAuth().post(`/user/${uid}/plants`, newPlant)
        .then(res => {
            console.log('res')
            dispatch({type: ADD_PLANT, payload: res.data.plants})
        })
        .catch(err => {
            console.log('err')
            dispatch({type:GET_ERRORS, payload: err})
        })
}
