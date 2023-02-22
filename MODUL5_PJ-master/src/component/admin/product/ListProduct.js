import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'
import Product from './Product'
import { useSelector,useDispatch } from 'react-redux';
import { act_get_all_product } from '../../../redux/actions';
import { getProductAPI } from '../../../api';

export default function ListProduct() {
  const listProduct=useSelector(state=>state.listProduct)
  const dispatch= useDispatch();
  // const search = useRef();
  // const [catalog, setCatalog] = "";
  
useEffect(()=>{
  getProductAPI().then((res)=>{
    // console.log("vao day ko");
    dispatch(act_get_all_product(res.data))
  })
},[listProduct]);
let elementProduct=listProduct?.map((product)=>{
  return <Product key={product.id} product= {product} />
})

    return (<>
    
        <div className="main">
       <Nav/>
        <main className="content">
          <div className="container-fluid p-0">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Product</h3>
                <nav className="navbar navbar-expand-lg bg-light">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin/CreateProduct">
                      <button type="button" className="btn btn-success">
                        + Add new Product
                      </button>
                    </Link>
                    <form className="d-flex" role="search">
                        <input
                          style={{
                            width: 500,
                            height: 50,
                            borderRadius: 50,
                            textAlign: "center"
                          }}
                          className="form-control me-2 fst-italic"
                          type="search"
                          placeholder="Enter product's name... "
                          aria-label="Search"  
                        />
                        <button
                          style={{ height: 50 }}
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                  </div>
                </nav>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {/* <c:foreach items="${listProduct}" var="pro"></c:foreach> */}
                {/* &lt;%-- --%&gt; */}
                <table
                  id="example1"
                  className="table table-bordered table-striped text-center"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Category</th>
                     
                      {/* <th>Detail</th> */}
                      <th colSpan={3}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {elementProduct}
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
              <nav aria-label="Page navigation example ">
                <ul className="pagination float-end mx-4">
                  <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row text-muted">
              <div className="col-6 text-start">
                <p className="mb-0">
                  <a className="text-muted" href="" target="_blank">
                    <strong>DemoAdminKit</strong>
                  </a>
                  -{" "}
                  <a className="text-muted" href="" target="_blank">
                    <strong>Bootstrap Admin Template</strong>
                  </a>{" "}
                  ©
                </p>
              </div>
              <div className="col-6 text-end">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="text-muted" href="#" target="_blank">
                      Support
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted" href="#" target="_blank">
                      Help Center
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted" href="#" target="_blank">
                      Privacy
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted" href="#" target="_blank">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </>
      )
    }