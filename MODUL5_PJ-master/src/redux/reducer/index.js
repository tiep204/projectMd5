import { combineReducers } from "redux";
import { listCatalog } from "./listCatalog";
import { listProduct } from "./listProduct";
export const rootReducer= combineReducers({listCatalog,listProduct})