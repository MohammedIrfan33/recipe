import React from 'react'

const Pagination = (props) =>{
  let pagination = [];
  for(let i=1;Math.ceil(i<=props.fiteredDishes.length/props.itemsPerPage);i++){
    pagination.push(i)
  }
  const showNextPage = (event) =>{
    props.setCurrentPage(event.target.id)
  }
  let pages = pagination.map((item)=>{
    return(
      <li id={item} onClick={showNextPage}>
        {item}
      </li>
      )
  })
  return (
    <div className="container pagination-container">
       <ul className="pagination">
        {pages}
       </ul>
    </div>
    )
}

export default Pagination