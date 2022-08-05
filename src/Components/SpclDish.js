import React,{ useState,useContext } from 'react';
import {AllMenuContext} from './AllMenuContext';
import CardDish from './CardDish';
import Popup from './Popup';
import Add from './AddCart'



const SpecialDish = () =>{
  
 const menu = useContext(AllMenuContext);
 const menuList = menu.Menu;
  
 
  
  const [SpecialDishshowPopup,setSpecialDishShowPopup] = useState(false);
  const [currentSpacialDish,setCurrentSpecialDish] = useState('');
  
  //show popup
  let showSpecialDishPopupHandler = (dishname) =>{
     setSpecialDishShowPopup(true);
     setCurrentSpecialDish(dishname);
  }
  
  const menulist = menuList.map((item,index)=>{
    if(index<12)
    return(
      <CardDish 
        item={item}
        spl={true}
        showSpecialDishPopupHandler={showSpecialDishPopupHandler}
      />
 )})

  
 
  return(
    <div className="special-dish">
      <Add 
        //addCart={addCart}
       // setAddCart={setAddCart}
      />
       { SpecialDishshowPopup &&
       <Popup 
        setSpecialDishShowPopup={setSpecialDishShowPopup} 
        currentSpacialDish={currentSpacialDish}
        spl={true}
        />
         
       }
      <div className="container">
        <div className="dish-header">
          <h2>Special Dishes</h2>
          <p>placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
        </div>
        <div className="item-list">
          <ul className="flex menu-items">
            {menulist}
          </ul>
        </div>
      </div>
    </div>
    )
}

export default SpecialDish