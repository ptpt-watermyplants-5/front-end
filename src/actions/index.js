export const DELETE_PLANT = "DELETE_PLANT"

export const deletePlant = (id) => {
    return({type:DELETE_PLANT, payload: id})
}