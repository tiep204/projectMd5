import React from 'react'

export default function () {
  return (
  
     
     <div className="product">

<div className="product__photo">
  <div className="photo-container">
    <div className="photo-main">
      <div className="controls">
        <i className="material-icons">share</i>
        <i className="material-icons">favorite_border</i>
      </div>
      <img
        src="https://img4.thuthuatphanmem.vn/uploads/2020/05/07/anh-pha-tra-sua-dep_062227481.jpg"
        alt="green apple slice"
      />
    </div>
    {/* <div className="photo-album">
      <ul>
        <li>
          <img
            src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
            alt="green apple"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
            alt="half apple"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
            alt="green apple"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
            alt="apple top"
          />
        </li>
      </ul>
    </div> */}
  </div>
</div>
<div className="product__info">
  <div className="title">
    <h1>Trà Hoa Nhài</h1>
    <span>COD: 45999</span>
  </div>
  <div className="priceDetail">
    <span>Price: 79k</span>
  </div>
  <div className="variant">
    <span className='size'> Size
    <select name='Size'>
    <option value="">M</option>
    <option value="">L</option>
   </select>
    </span>
  </div>
  <div className="variant">
    <span className='size1'> Topping
    <select >
    <option value="">Trân Châu Sợi</option>
    <option value="">Trân Châu Đen</option>
    <option value="">Trân Châu Trắng</option>
    <option value="">Trân Châu Hoàng Kim</option>
   </select>
    </span>
   
  </div>
  
  <div className="description">
    <h3>description</h3>
    <ul>
      <li>Apples are nutricious</li>
      <li>Apples may be good for weight loss Apples may be good for weight lossApples may be good for weight loss</li>
      <li>Apples may be good for bone health</li>
      <li>They're linked to a lowest risk of diabetes</li>
    </ul>
  </div>
  <button className="buy--btn">ADD TO CART</button>
</div>
</div>
  
  )
}
