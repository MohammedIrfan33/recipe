import React,{useState,useEffect} from 'react';
// this globel Context and global State
//context
export const AllMenuContext = React.createContext()
//export AllMenuContext = React.createContext()
export const AllMenu = (props) =>{
  //globel state
  //  Menu 
  const[Menu,setMenu] = useState([]);
  const[addCart,setAddCart] = useState([]);
   // to check data loading or note
  const[isLoading,setLoading] = useState(true);
  
    // api call for list menu items
  const getAlltheMenu =  async() =>{
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
    let response = await fetch(API_URL)
    let data = await response.json()
    setMenu(data.meals)
    setLoading(false)
  }
  useEffect( ()=>{
    getAlltheMenu()
    console.log(getAlltheMenu())
  },[]);
   // addd cart item
  let addCartHandler = (item) =>{
    const check =  addCart.find((element)=>{
        return (
          element.strMeal===item.strMeal
          )
      })
    check ? alert("already taken") : 
    setAddCart(
      [
        ...addCart,
         item
      ]
     );
  }
  return (
    <AllMenuContext.Provider value={{
        Menu:Menu,
        addCart:addCart,
       setAddCart:setAddCart,
       addCartHandler:addCartHandler
    }}>
      {!isLoading ? props.children : "loading"}
    </AllMenuContext.Provider>
    )
}