export const act_get_all_topping = (listTopping) => {
    return {
        type: "GET_ALL_TOPPING",
        payload: listTopping
    }
}
export const act_add_topping = (topping) => {
    return {
        type: "ADD_TOPPING",
        payload: topping
    }
}
export const act_edit_topping = (topping) => {
    return {
        type: "EDIT_TOPPING",
        payload: topping
    }
}
export const act_delete_topping = (id) => {
   
    return {
        type: "DELETE_TOPPING",
        payload: id
    }
}
