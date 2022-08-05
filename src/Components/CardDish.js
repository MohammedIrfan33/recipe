import React from 'react';


const CardDish = ({ item,showcategoryDishPopup,showSpecialDishPopupHandler,spl}) =>{
  return(
    <li className="card flex" key={item.idMeal}  
        onClick={ ()=>{ 
        spl ?
        showSpecialDishPopupHandler(item.strMeal)
        :
        showcategoryDishPopup(item.strMeal)
        }}>
      <img src={item.strMealThumb} alt="abc" />
      <h4>{item.strMeal}</h4>
    </li>
    )
  
}

export default CardDish