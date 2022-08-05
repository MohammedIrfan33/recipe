import React,{useState,useEffect,useContext} from 'react';
import Pagination from './Pagination';
import CardDish from './CardDish';
import Popup from './Popup';
import Add from './AddCart'
import {AllMenuContext} from './AllMenuContext';

const Categories = () =>{
  
  const Menu = useContext(AllMenuContext);
  const allMenu= Menu.Menu;
  
  // for Category list
  const[Category,setCategory] = useState([]);
  //for default active menu
  const[singleItem,setSingleItem] = useState([]);
  
  const [fiteredDishes,setFiltereddishes] = useState([]);
  const [activeDish,setactiveDish] = useState('Beef');
  
  //Pagination
  const [currentPage,setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  
  let indexofLasttDish = currentPage * itemsPerPage;
  let indexofFirstDish = indexofLasttDish - itemsPerPage;

  let showTheseDishes = fiteredDishes.slice(indexofFirstDish,indexofLasttDish);
  
  const [categoryDishshowPopup,setcategoryDishShowPopup] = useState(false);
  const [currentCategoryDish,setcurrentCategoryDish] = useState('');
  
  
  //api call for Category of dishes
  const getAlltheCategories =  async() =>{
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    let response = await fetch(API_URL)
    let data = await response.json()
    setCategory(data.categories)
  }
  //api call for default active dish
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
  const getSingleItem =  async() =>{
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
    let response = await fetch(API_URL)
    let data = await response.json()
    setSingleItem(data.meals)
  }
  useEffect( ()=>{
    getAlltheCategories()
    getSingleItem()
  },[])
  
  //show popup
  let showcategoryDishPopupHandler = (dishname) =>{
     setcategoryDishShowPopup(true)
     setcurrentCategoryDish(dishname)
  }

  // function for fitered disheshes
  const filteredItems = (categories) =>{
    
    setactiveDish(categories)
    setSingleItem([])
    // set active  menu
    let filterd = allMenu.filter((item)=>{
     return categories === item.strCategory
    })
    setFiltereddishes(filterd)
  }
  //list name of menu
  const CategoriesMenu = Category.map((item)=>{
    console.log(item.strCategory)
    console.log(activeDish)
    return(
      
      <li className={activeDish === item.strCategory ?'active' : ''} onClick={()=>filteredItems(item.strCategory)}>      
        
      <img src={item.strCategoryThumb} alt="abc" />
      <span>{item.strCategory}</span>    
        
      </li>
      )
  })
  
  // default single item
 const defaultItems = singleItem.map((item,index)=>{
   const maxItems=6;
   if(index<maxItems)
   return (
     <CardDish  
     item={item}
     key={item.id}
     />
     )
 })

  return(
    <div className="categorylist">
      <div className ="container">
        <div className="categories-header">
           <h2>Categories Menu</h2>
           <p>placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
        </div>
        <div>
          <ul className="flex categoriesitems">
            {CategoriesMenu}
          </ul>
        </div>
        <div className="filterd-dishes">
        {categoryDishshowPopup && 
        <Popup 
          setcategoryDishShowPopup={setcategoryDishShowPopup}
          currentCategoryDish={currentCategoryDish}
        />}
        <Add/>
         <ul className="flex">
          {defaultItems}
            {defaultItems!==0 || showTheseDishes.length !== 0 ?
              showTheseDishes.map((item)=>{
                return(
                  <CardDish 
                        item={item}
                        showcategoryDishPopup={showcategoryDishPopupHandler}
                     />
                )
              })
              :
              <h5>nothing found</h5>  
             }
         </ul>
        </div>
      </div>
     <Pagination 
      fiteredDishes={fiteredDishes}
      itemsPerPage={itemsPerPage}
      setCurrentPage={setCurrentPage}
     />
    </div>
    )
}

export default Categories;