import { Routes, Route } from "react-router-dom";
// import Index from "../user/home/Index";
import NavBar from "../admin/navbar/NavBar";
import ListCatalog from "../admin/catalog/ListCatalog";
import ListProduct from "../admin/product/ListProduct";
import ListUser from "../admin/user/ListUser";
import NewUse from "../admin/user/NewUser";
import NewCatalog from "../admin/catalog/NewCatalog";
import UpdateCatalog from "../admin/catalog/UpdateCatalog";
import CreateProduct from "../admin/product/CreateProduct";
import UpdateProduct from "../admin/product/UpdateProduct";
import Detail from "../admin/product/Detail";
import Index from "../admin/home/Index";

// import './css/app.scoped.css';

function AppAdmin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Index />} />
          <Route path="/Index" element={<Index />} />
          <Route path="/Category" element={<ListCatalog />} />
          <Route path="/Product" element={<ListProduct />} />
          <Route path="/User" element={<ListUser />} />
          <Route path="/newUser" element={<NewUse />} />
          <Route path="/newCatalog" element={<NewCatalog />} />
          <Route path="/updateCatalog" element={<UpdateCatalog />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />
          <Route path="/UpdateProduct" element={<UpdateProduct />} />
          <Route path="/DetailProduct" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppAdmin;
