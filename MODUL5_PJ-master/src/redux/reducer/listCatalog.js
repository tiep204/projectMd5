import { addCatalogAPI, deleteCatalogAPI, editCatalogAPI, getCatalogAPI, searchCatalogAPI, } from "../../api";
import axios from "axios";
const stateInitial = []
export const listCatalog = (state = stateInitial, action) => {
    switch (action.type) {
        case "GET_ALL_CATALOG":
            state = action.payload
            return state;
        case "ADD_CATALOG":
            addCatalogAPI(action.payload).then(() => {
                getCatalogAPI().then((res) => {
                    state = res.data
                })
            })
            return state;
        case "EDIT_CATALOG":
            editCatalogAPI(action.payload.id, action.payload).then(() => {
                getCatalogAPI().then((res) => {
                    console.log("1");
                    state = res.data
                })
            })
            console.log("2");
            return state;
        case "DELETE_CATALOG":
            deleteCatalogAPI(action.payload).then(() => {
                getCatalogAPI().then((res) => {
                    state = res.data
                })
            })
            return state;
        case "SEARCH_CATALOG":
                searchCatalogAPI(action.payload).then(res => {
                    state= res.data
                })
        default:
            return state
    }
}
