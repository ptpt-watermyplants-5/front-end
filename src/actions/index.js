export const DELETE_PLANT = "DELETE_PLANT";
export const IS_FETCHING = "IS_FETCHING";
export const GET_ERRORS = "GET_ERRORS";
export const SET_LOGGEDIN = "SET_LOGGEDIN";

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
