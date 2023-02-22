import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { addCatalogAPI } from '../../../api'
import { act_add_catalog } from '../../../redux/actions'

export default function NewCatalog() {
  const dispatch= useDispatch()
  const navigate= useNavigate()
    const [catalogName,setcatalogName]=useState("")
    const [status,setStatus]=useState(true)
 const handleCreatCatalog=()=>{
  if(catalogName==""){
    navigate("/admin/Category")
  }else{
     let newCatalog= {
    catalogName,status
   }
   dispatch(act_add_catalog(newCatalog))
    navigate("/admin/Category")
  }
  
 }
    return (
        <div className='newUserPage1'>
          <h1>New Category</h1>
          <form onSubmit={(e)=>{e.preventDefault()}} >
            <div className="item">
              <label>CatagoryName</label>
              <input type="text" placeholder='please enter catalogName' onChange={(e)=>setcatalogName(e.target.value)} required/>
            </div>
            <button onClick={handleCreatCatalog}>Create</button>
            </form>
        </div>
      )
    }
 