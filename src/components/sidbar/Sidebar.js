import React from "react";
import "./Sidebar.css";
const Sidebar = (props) => {
  const itemPrice = props.cartItems.reduce((a,b)=> a+b.price * b.qty,0)
  const totalPrice = itemPrice
  return (
    <div className="sidebar">
      {
        props.cartItems.length === 0 ?
        <div className="empty-box">سبد خرید خالی است.</div> :
        <div className="show-box">شما تعداد {props.cartItems.length} محصول در سبد خرید خود دارید.</div>
      }
      <div className="cart-item">
        {
          props.cartItems.map((item)=>{
            return(
              <div key={item.id} className="product-item">
        <div className="product-detail">
            <img src={item.image} alt="." />
            <h2>{item.title}</h2>
            </div>
            <div className="product-price-item">
              <div className="price">
                <span>{item.price}</span>
                <span className="qty">خرید{item.qty}</span>
              </div>
              <div className="remove-item">
                <button onClick={()=>props.removeItem(item)}>حذف از سبد خرید</button>
              </div>
            </div>
          </div>
            )
          })
        }

          <div className="total-price">
            <div className="total-text"> مجموع قیمت:</div>
            <div className="total">{totalPrice} تومان</div>
          </div>
        </div>
      
    </div>
  );
};

export default Sidebar;
