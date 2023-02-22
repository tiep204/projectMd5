import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { act_edit_product, act_get_all_catalog } from '../../../redux/actions';
import { useState } from 'react';
import { getCatalogAPI } from '../../../api';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";


export default function UpdateProduct() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const product=useLocation().state;
console.log("product",product);
  const[name,setName]=useState(product.name)
  const[image,setImage]=useState(product.image)
  const[title,setTitle]=useState(product.title)
  const[quantity,setQuantity]=useState(product.quantity)
  const[price,setPrice]=useState(product.price)
  const[status,setStatus]=useState(true)
  const[categoryId,setCategoryId]=useState(product.catalog.id)
  const[creat_date,setCreat_date]=useState(product.creat_date)
  const listCatalog=useSelector(state=>state.listCatalog)
    const handleUpdate=()=>{
    let catalog=listCatalog?.filter(cat=>cat.id==categoryId)

      let editProduct={name,id:product.id,image,title,quantity,price,creat_date,catalog:catalog[0],status:(status=="true"||status==true)?true:false}
       
      dispatch(act_edit_product(editProduct))
        navigate("/admin/Product")
    }


    useEffect(()=>{
      getCatalogAPI().then((res)=>{
        dispatch(act_get_all_catalog(res.data))
      })
    },[]);


    const uploadFile = () => {
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImage(url);
        });
      });
    
    };
  
  
      useEffect(() => {
        listAll(imagesListRef).then((res) => {
          res.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url]);
            });
          });
        });
      }, []);
    


    return (
      
        <div className='newUserPage1'>
          <h1>Update Product</h1>
          <form onSubmit={(e)=>e.preventDefault()}>
          <div className="item">
              <label>Product ID</label>
              <input type="text" placeholder='ProductID' value={product.id} readOnly/>
            </div>
            <div className="item">
              <label>Product Name</label>
              <input type="text" placeholder='Enter ProductName'value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="item">
              <label>Image</label>
              <input type="file" placeholder='Enter Image'onChange={(e)=>setImageUpload(e.target.files[0])}/>
          <button onClick={uploadFile}>upload</button>
          <img src={image} style={{width:250,height:250}}></img>
            </div>
            <div className="item">
              <label>Title</label>
              <input type="text" placeholder='Enter Title'value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="item">
              <label>Quantity</label>
              <input type="text" placeholder='Enter Quantity'value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            </div>
            <div className="item">
              <label>Price</label>
              <input type="text" placeholder='Enter Price'value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="item activeContainer">
              <label> Status </label>
              <select name='active' id='active'value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="item activeContainer" >
              <label>Category</label>
              <select type="text" placeholder='Enter Category' value={categoryId} onChange={(e)=>setCategoryId(e.target.value)}>{listCatalog?.map(e=>{
                return <option key={e.id} value={e.id}>{e.name}</option>
              })}
                
              </select>
            </div> 
            <button onClick={handleUpdate}>Update</button>
          </form>
        </div>
      )
    }
    
    