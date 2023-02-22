import { getCatalogAPI } from "../../api"

export const act_get_all_catalog = (listCatalog) => {
    return {
        type: "GET_ALL_CATALOG",
        payload: listCatalog
    }
}
export const act_add_catalog = (catalog) => {
    return {
        type: "ADD_CATALOG",
        payload: catalog
    }
}
export const act_edit_catalog = (catalog) => {
    return {
        type: "EDIT_CATALOG",
        payload: catalog
    }
}
export const act_delete_catalog = (id) => {
   
    return {
        type: "DELETE_CATALOG",
        payload: id
    }
}


export const act_get_all_product = (listProduct) => {
    return {
        type: "GET_ALL_PRODUCT",
        payload: listProduct
    }
}
export const act_add_product = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
export const act_edit_product = (product) => {
    return {
        type: "EDIT_PRODUCT",
        payload: product
    }
}
export const act_delete_product=(id)=>{
    return{
        type:"DELETE_PRODUCT",
        payload:id
    }
}
export const act_search_catalog=(name)=>{
    return {
        type: "SEARCH_CATALOG",
        payload:name
    }
}
