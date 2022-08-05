import React,{useContext} from 'react';
import {AllMenuContext} from './AllMenuContext';

const Popup = ({
  setSpecialDishShowPopup,
  setcategoryDishShowPopup,
  currentCategoryDish,
  currentSpacialDish,
  spl,
}) =>{
  
  
  const values = useContext(AllMenuContext);
  const allMenu = values.Menu;
  const addCartHandler = values.addCartHandler
  
  let CloseSpecialDishPopupHandler = () =>{
     spl ? setSpecialDishShowPopup(false) : setcategoryDishShowPopup(false)
      
  }
  let filterdDishes = allMenu.filter((item)=>{
      return  item.strMeal === currentSpacialDish
  }).map((item)=>{
      return( 
        <>
         <h3>{item.strMeal}</h3>
          <button onClick={()=>addCartHandler(item)}>Add to cart</button>
        </>
      )
  })
    //filter when clicked popup
  let filterdCategoryDishes = allMenu.filter((item)=>{
      return  item.strMeal === currentCategoryDish
  }).map((item)=>{
      return( 
        <>
         <h3>{item.strMeal}</h3>
          <button onClick={()=>addCartHandler(item)} >Add to cart</button>
        </>
      )
  })
  return(
      <div className="popup">
        <div className="popup-content" >
          {spl ? filterdDishes : filterdCategoryDishes}
        </div>
        <button  className="close-button" onClick={CloseSpecialDishPopupHandler}>close</button>
      </div>
  )
}

export default Popup;