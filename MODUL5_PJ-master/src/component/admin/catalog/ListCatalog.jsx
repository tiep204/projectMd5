import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'

import Category from './Category'
import { useSelector,useDispatch } from 'react-redux';
import { act_get_all_catalog, act_search_catalog } from '../../../redux/actions';
import { getCatalogAPI } from '../../../api';
export default function ListCatalog() {
  let listCatalog=useSelector(state=>state.listCatalog)
  const dispatch= useDispatch();
  
useEffect(()=>{
  getCatalogAPI().then((res)=>{
    dispatch(act_get_all_catalog(res.data))
  })
},[listCatalog]);
let elementCategory=listCatalog?.map((catalog)=>{
  return <Category  key={catalog.id} catalog= {catalog} />
})

    return (
        <div>
      <div className="main">
      <Nav/>
        <main className="content">
          <div className="container-fluid p-0">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Demo Category Table</h3>
                <nav className="navbar navbar-expand-lg bg-light">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin/newCatalog">
                      <button type="button" className="btn btn-success">
                        + Add new Category
                      </button>
                    </Link>
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
                          aria-label="Search"  onChange={(e)=> dispatch(act_search_catalog(e.target.value))}
                        />
                        <button 
                          style={{ height: 50 }}
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Search
                        </button>
                  </div>
                </nav>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table
                  id="example1"
                  className="table table-bordered table-striped text-center"
                >
                  <thead>
                    <tr>
                      <th>Category ID</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elementCategory}
                  </tbody>
                </table>
              </div>
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
              {/* /.card-body */}
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
    </div>
      )
    }
    