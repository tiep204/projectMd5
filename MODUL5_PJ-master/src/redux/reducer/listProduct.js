import { getProductAPI, addProductAPI, editProductAPI, deleteProductAPI } from "../../api";
const stateInitial = [];
export const listProduct = (state = stateInitial, action) => {
    switch (action.type) {
     
        case "GET_ALL_PRODUCT":
            state = action.payload
            return state;
        case "ADD_PRODUCT":
            addProductAPI(action.payload).then(() => {
                getProductAPI().then((res) => {
                    state = res.data
                })
            })
            return state;
        case "DELETE_PRODUCT":
            deleteProductAPI(action.payload).then(()=>{
                getProductAPI().then((res)=>{
                    state=res.data
                })
            })
            return state;
        case "EDIT_PRODUCT":
            editProductAPI(action.payload.id, action.payload).then(() => {
                getProductAPI().then((res) => {
                    state = res.data
                })
            })
            return state;
       
        default:
            return state
    }
}