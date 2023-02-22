import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function NavBar (){
    return(
    <div>
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                <Link className="sidebar-brand" to="/admin/Index">
                    <span className="align-middle">AdminKit</span>
                </Link>
                <ul className="sidebar-nav">
                    {/* <li className="sidebar-header">Pages</li> */}
                    <li className="sidebar-item ">
                    <Link className="sidebar-link" to="/admin/Index" >                        
                        <i className="align-middle" data-feather="grid" />{" "}
                        <span className="align-middle">Home</span>
                    </Link>
                    </li>
                    <li className="sidebar-item active">
                    <Link className="sidebar-link" to="/admin/Category">                        
                        <i className="align-middle" data-feather="grid" />{" "}
                        <span className="align-middle">Category</span>
                    </Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" to="/admin/Product">                        
                        <i className="align-middle" data-feather="grid" />{" "}
                        <span className="align-middle">Product</span>
                    </Link>
                    </li>
                    <li className="sidebar-item">
                    <Link className="sidebar-link" to="/admin/User">                        
                        <i className="align-middle" data-feather="grid" />{" "}
                        <span className="align-middle">User</span>
                    </Link>
                    </li>
                   
                </ul>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    </div>
   
    )
}

export default NavBar