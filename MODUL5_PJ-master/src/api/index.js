import axios from "axios";
import { BASE_URL_CATALOG} from "./baseUrl"; 
import { BASE_URL_PRODUCT } from "./baseUrl";



export const getCatalogAPI = async (id) => {
  id = id || "" ;
  
 return await axios.get(`${BASE_URL_CATALOG}/${id}`);
};
export const getCatalogAPI_True = async (id) => {
  id = id || "" ;
  
 return await axios.get(`${BASE_URL_CATALOG}?status=true`);
};
export const addCatalogAPI = async (catalog) => {
  return await axios.post(BASE_URL_CATALOG, catalog);
};

export const editCatalogAPI = async (id, catalog) => {
  return await axios.put(`${BASE_URL_CATALOG}/${id}`, catalog);
};

export const deleteCatalogAPI = async (id) => {
  return await axios.delete(`${BASE_URL_CATALOG}/${id}`);
};
export const searchCatalogAPI=async(catalogName)=>{
  return await axios.get(`${BASE_URL_CATALOG}?name_like=${catalogName}`);
  
};

export const getProductAPI = async (id) => {
    id = id || "";
    return await axios.get(`${BASE_URL_PRODUCT}/${id}`);
  };
  export const addProductAPI = async (product) => {
    return await axios.post(BASE_URL_PRODUCT, product);
  };
  
  export const editProductAPI = async (id, product) => {
    return await axios.put(`${BASE_URL_PRODUCT}/${id}`, product);
  };
  
  export const deleteProductAPI = async (id) => {
    return await axios.delete(`${BASE_URL_PRODUCT}/${id}`);
  };
  



  