import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { act_delete_catalog } from '../../../redux/actions';

export default function Category(props) {
  const dispatch =useDispatch();
 
  let {catalog}= props
  const navigate =useNavigate();
  // console.log("props",catalog);
  let handleUpdate =()=>{{
    navigate("/admin/updateCatalog",{state:catalog})
  }}
  const handleDelete=()=>{
    dispatch(act_delete_catalog(catalog.id))
    navigate("/admin/Category")
  }
  return (
    <tr>
                      <td>{catalog.id}</td>
                      <td>{catalog.catalogName}</td>    
                      <td>{catalog.status?"Hoat dong":"khong hoat dong"}</td>
                      <td>
                        <a>
                        <button type="button" className="btn btn-warning" onClick={handleUpdate}>
                          Edit
                        </button>
                        </a> 
                      </td>
                      <td>
                        <button onClick={handleDelete} type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
  )
}
