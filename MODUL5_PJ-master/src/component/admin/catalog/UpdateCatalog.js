import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_edit_catalog, act_eid_catalog } from '../../../redux/actions';

export default function UpdateCatalog() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const catalog=useLocation().state;
  const [catalogName,setcatalogName]=useState(catalog.catalogName)
    const [descripttion,setDescripttion]=useState(catalog.descripttion)
    const [creat_date,setCreat_date]=useState(catalog.creat_date)
    const [status,setStatus]=useState(catalog.status)
    const handleUpdate=()=>{
      let editCatalog={catalogName,descripttion,creat_date,id:catalog.id,status:(status=="true" || status==true)?true:false}
        dispatch(act_edit_catalog(editCatalog))
        navigate("/admin/Category")
    }
    return (
      
        <div classcatalogName='newUserPage1'>
          <h1>Update Category</h1>
          <form onSubmit={(e)=>e.preventDefault()} >
          <div classcatalogName="item">
              <label>CatagoryId</label>
              <input type="text" placeholder='catalogID' value={catalog.id} readOnly/>
            </div>
            <div classcatalogName="item">
              <label>CatagorycatalogName</label>
              <input type="text" placeholder='please enter catalogName'value={catalogName} onChange={(e)=>setcatalogName(e.target.value)} />
            </div>
            
            <div classcatalogName="item activeContainer">
              <label> Status </label>
              <select catalogName='active' id='active' value={status}  onChange={(e)=>setStatus(e.target.value)}>
                <option value={true} >Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <button onClick={handleUpdate}>Update</button>
          </form>
        </div>
      )
    }
   