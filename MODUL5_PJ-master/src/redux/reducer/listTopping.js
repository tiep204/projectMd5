import { addToppingAPI, deleteToppingAPI, editToppingAPI, getToppingAPI } from "../../api";


const stateInitial=[];
export const listTopping =(state=stateInitial,action) =>{
    switch(action.type){
        case "GET_ALL_TOPPING":
            state=action.payload
            return state;
        case "ADD_TOPPING":
           addToppingAPI(action.payload).then(()=>{
            getToppingAPI().then((res) =>{
                state=res.data
            })
           })
           return state;
        case "EDIT_TOPPING":
            editToppingAPI(action.payload.id,action.payload).then(()=>{
                getToppingAPI().then((res)=>{
                    state=res.data
                })
            })
            return state;
        case "DELETE_TOPPING":
         deleteToppingAPI(action.payload).then(()=>{
            getToppingAPI().then((res)=>{
                state=res.data
            })
         })
         return state;
        default:
            return state;
    }
}