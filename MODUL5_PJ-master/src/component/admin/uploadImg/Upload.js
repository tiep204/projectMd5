
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";


function Upload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);


  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "images/");


  // Viết hàm upload
  const uploadFile = () => {
    if (imageUpload == null) return;


    const imageRef = ref(storage, `images/${imageUpload.name}`);


    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };


  // Lấy dữ liệu trả về từ firebase


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
    <div className='App'>
      <input
        type='file'
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
}


export default Upload;
