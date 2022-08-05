import React,{ useContext } from 'react';
import {AllMenuContext} from './AllMenuContext';
function AddCart() {
  
  const val = useContext(AllMenuContext);
  const addCart= val.addCart
  const setAddCart= val.setAddCart
  
  function removeCartItem(itemName){
   const removeCart =  addCart.filter((item)=>{
       return item.strMeal !== itemName
    })
    setAddCart(removeCart)
  }
  
 const addCartItems= addCart.map((item)=>{
   return (
     <div>
      <img src={item.strMealThumb} alt=""/>
      <span>{item.strMeal}</span>
      <button className="btn buy-btn">Buy Now</button>
      <button className="btn remove-btn" onClick={()=>removeCartItem(item.strMeal)}>Remove</button>
     </div>
     )
 })
  return(
    <div className="add-cart-container">
       <span>cart</span>
       {addCartItems}
    </div>
    )
}

export default AddCart