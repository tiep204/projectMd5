import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCatalogAPI } from '../../../api';
import { act_add_product, act_get_all_catalog } from '../../../redux/actions';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";


export default function CreateProduct() {
  const [productImageUpload, setproductImageUpload] = useState(null);
  const [productImageUrls, setproductImageUrls] = useState([]);
  const productImagesListRef = ref(storage, "productImages/");

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const[productName,setproductName]=useState("")
 const[productImage,setproductImage]=useState(null)
 const[productTitle,setproductTitle]=useState("")
 const[productQuantity,setproductQuantity]=useState("")
 const[productPrice,setproductPrice]=useState("")
 const[productStatus,setproductStatus]=useState(true)
 const[id,setid]=useState()
 const listCatalog=useSelector(state=>state.listCatalog)
 useEffect(()=>{
  getCatalogAPI().then((res)=>{
    dispatch(act_get_all_catalog(res.data))
  })
},[]);
  const handleCreatProduct=()=>{
    let catalog=listCatalog?.filter(cat=>cat.id==id)
    if(productName ==""||productImage==""||productTitle==""||productQuantity==""||productPrice==""){
      navigate("/admin/Product")
    }else{
      let newProduct= {
     productName,productImage,productTitle,productQuantity,productPrice,productStatus
    }
   
    dispatch(act_add_product(newProduct))
     navigate("/admin/Product")
    }
    
  }
  const uploadFile = () => {
    if (productImageUpload == null) return;
    const productImageRef = ref(storage, `productImages/${productImageUpload.productName}`);

    uploadBytes(productImageRef, productImageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setproductImage(url);
      });
    });
    console.log("kkk");
  };


    useEffect(() => {
      listAll(productImagesListRef).then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setproductImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);
  

  return (
    
    <div className='newUserPage1'>
      <h1>New Product</h1>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className="item">
          <label>Product Name</label>
          <input type="text" placeholder='Enter ProductproductName'onChange={(e)=>setproductName(e.target.value)}/>
        </div>
        <div className="item">
          <label>productImage</label>
          <input type="file" placeholder='Enter productImage'onChange={(e)=>setproductImageUpload(e.target.files[0])}/>
          <button onClick={uploadFile}>upload</button>
          <img src={productImage} style={{width:250,height:250}}></img>
        </div>
        <div className="item">
          <label>productTitle</label>
          <input type="text" placeholder='Enter productTitle'onChange={(e)=>setproductTitle(e.target.value)}/>
        </div>
        <div className="item">
          <label>productQuantity</label>
          <input type="text" placeholder='Enter productQuantity'onChange={(e)=>setproductQuantity(e.target.value)}/>
        </div>
        <div className="item">
          <label>productPrice</label>
          <input type="text" placeholder='Enter productPrice'onChange={(e)=>setproductPrice(e.target.value)}/>
        </div>
      
        
        <div className="item activeContainer">
          <label>Category</label>
          <select  type="text" placeholder='Enter Category'onChange={(e)=>setid(e.target.value)}>
            {listCatalog?.map((catalog)=>{
              if(catalog.productStatus==true){
                return <option key={catalog.id} value={catalog.id}  > {catalog.catalogproductName}</option>
              }
              
            })}
            
          </select>
        </div> 

        <button onClick={handleCreatProduct}>Create</button>
      </form>
    </div>
  )
}


